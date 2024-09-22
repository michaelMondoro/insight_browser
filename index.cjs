const { app, session, ipcMain } = require("electron");
const path = require("path");

const { Session } = require("./Session.cjs");
const { processRequest } = require("./utils/http.cjs");
const { createWindow, loadPage } = require("./utils/ui.cjs")

app.commandLine.appendSwitch('disable-gpu'); // WHY??

let mainWindow;
let user_session = new Session();

function monitor() {
  // Intercept HTTP requests
  const ses = session.defaultSession;
  ses.webRequest.onResponseStarted((details) => {
    if (user_session != undefined && user_session.active) {
      var data = processRequest(details);
      user_session.addRequest(data);
      mainWindow.webContents.send("updateRequestCount");
    }
  });
}


app.on("ready", () => {
  mainWindow = createWindow();
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));

  monitor(); 
  
  // recieve calls from front-end
  ipcMain.on("startSession", () => user_session.startSession()); 
  ipcMain.on("stopSession", () => user_session.endSession());
 
  // send data to front-end
  ipcMain.handle("loadSession", () => {return user_session})
  // mainWindow.webContents.openDevTools();
});
