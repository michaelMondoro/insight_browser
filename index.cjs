const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Session = require("./Session.cjs");
const { start } = require("repl");

app.commandLine.appendSwitch('disable-gpu'); // WHY??

let user_session;


function startSession() {
  user_session = new Session();
  user_session.startSession();
}

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "electron/preload.js")
    }
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  // mainWindow.webContents.openDevTools();

 ipcMain.on("startSession", startSession); 
});