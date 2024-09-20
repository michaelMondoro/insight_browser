const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
app.commandLine.appendSwitch('disable-gpu'); // WHY??


function startSession() {
  console.log("session started");
  
}
app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();

 ipcMain.on("startSession", startSession); 

});