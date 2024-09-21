const { BrowserWindow } = require("electron")
const path = require("path");

module.exports = {
    createWindow: () => {
        return new BrowserWindow({
          width: 800,
          height: 600,
          webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "../electron/preload.js")
          }
        });
      }
}