const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  startSession: () => ipcRenderer.send('startSession'),
  stopSession: () => ipcRenderer.send('stopSession'),
  visitSite: (site) => ipcRenderer.send('visitSite', site),

  updateRequestCount: (callback) => ipcRenderer.on('updateRequestCount', (_event) => callback()),
  setTheme: () => ipcRenderer.invoke('setTheme'),
  loadSession: () => ipcRenderer.invoke("loadSession")
})

