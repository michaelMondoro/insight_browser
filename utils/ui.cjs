const { BrowserWindow } = require("electron")
const path = require("path");

module.exports = {
    createWindow: () => {
        return new BrowserWindow({
          // fullscreen: true,
          width: 1000,
          height: 700,
          webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webviewTag: true,
            preload: path.join(__dirname, "../electron/preload.js")
          }
        });
      }
}