const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { startSession } = require("./backend.cjs")

app.commandLine.appendSwitch('disable-gpu'); // WHY??


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
  mainWindow.webContents.openDevTools();

 ipcMain.on("startSession", startSession); 

});