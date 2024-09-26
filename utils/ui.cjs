const { BrowserWindow } = require("electron")
const path = require("path");

module.exports = {
    createWindow: () => {
        return new BrowserWindow({
          fullscreen: true,
          webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webviewTag: true,
            preload: path.join(__dirname, "../electron/preload.js")
          }
        });
      }
}