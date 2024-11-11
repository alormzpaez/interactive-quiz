// electron.d.ts
export {};

declare global {
  interface Window {
    ipcRenderer: {
      on: (...args: Parameters<typeof ipcRenderer.on>) => void;
      off: (...args: Parameters<typeof ipcRenderer.off>) => void;
      send: (...args: Parameters<typeof ipcRenderer.send>) => void;
      invoke: (...args: Parameters<typeof ipcRenderer.invoke>) => void;
      getImagePaths: () => Promise<string[]>;  // Ajustamos para retornar una lista de imágenes como Promesa
    };
  }
}
