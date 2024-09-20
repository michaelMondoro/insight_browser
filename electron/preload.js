const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  startSession: () => ipcRenderer.send('startSession'),
})

