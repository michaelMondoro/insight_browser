const { app, session, ipcMain } = require("electron");
const path = require("path");

const { Session } = require("./Session.cjs");
const { processRequest } = require("./utils/http.cjs");
const { createWindow, loadPage } = require("./utils/ui.cjs")

app.commandLine.appendSwitch('disable-gpu'); // WHY??

let mainWindow;
let userSession = new Session();

function monitor() {
  // Intercept HTTP requests
  const ses = session.defaultSession;
  ses.webRequest.onResponseStarted((details) => {
    if (userSession != undefined && userSession.active) {
      var data = processRequest(details);
      userSession.addRequest(data);
      mainWindow.webContents.send("updateRequestCount");
    }
  });
}


app.on("ready", () => {
  mainWindow = createWindow();
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));

  monitor(); 
  
  // recieve calls from front-end
  ipcMain.on("startSession", () => userSession.startSession()); 
  ipcMain.on("stopSession", () => userSession.endSession());
 
  // send data to front-end
  ipcMain.handle("loadSession", () => {return userSession})
  // mainWindow.webContents.openDevTools();
});
