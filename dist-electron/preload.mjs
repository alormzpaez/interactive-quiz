"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(channel, (event, ...args2) => listener(event, ...args2));
  },
  off(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.off(channel, ...omit);
  },
  send(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.send(channel, ...omit);
  },
  invoke(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.invoke(channel, ...omit);
  }
  // You can expose other APTs you need here.
  // ...  
});
const backend = {
  nodeVersion: async (msg) => await electron.ipcRenderer.invoke("get-solved-problems", msg),
  //
  getUsers: async () => await electron.ipcRenderer.invoke("getUsers"),
  saveUsers: async (data) => await electron.ipcRenderer.invoke("saveUsers", data),
  //
  saveData: async (data, id) => await electron.ipcRenderer.invoke("saveData", data, id),
  loadData: async (id) => await electron.ipcRenderer.invoke("loadCurrentProblemsFinished", id),
  loadImageForProblem: async (data) => await electron.ipcRenderer.invoke("loadImageForProblem", data)
};
electron.contextBridge.exposeInMainWorld("backend", backend);
