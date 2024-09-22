const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  startSession: () => ipcRenderer.send('startSession'),
  stopSession: () => ipcRenderer.send('stopSession'),

  updateRequestCount: (callback) => ipcRenderer.on('updateRequestCount', (_event) => callback())
})

