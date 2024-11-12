import { ipcRenderer, contextBridge } from 'electron'
import { DataToGetProblemImage, ProblemSolvedInLocalDB } from '../src/interfaces'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  },

  // You can expose other APTs you need here.
  // ...  
})

export const backend = {
  nodeVersion: async (msg: string): Promise<string> => await ipcRenderer.invoke("get-solved-problems", msg),
  saveData: async (data: any): Promise<{ success: boolean, error: string }> => await ipcRenderer.invoke("saveData", data),
  loadData: async (): Promise<ProblemSolvedInLocalDB[] | null> => await ipcRenderer.invoke("loadCurrentProblemsFinished"),
  loadImageForProblem: async (data: DataToGetProblemImage): Promise<string | null> => await ipcRenderer.invoke("loadImageForProblem",data),
};

contextBridge.exposeInMainWorld("backend", backend);

