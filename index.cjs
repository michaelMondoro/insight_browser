const { app, BrowserWindow } = require("electron");
const path = require("path");
app.commandLine.appendSwitch('disable-gpu'); // WHY??

app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  // mainWindow.webContents.openDevTools();
});