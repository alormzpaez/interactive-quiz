import {app, ipcMain, IpcMainInvokeEvent } from "electron"
import * as fs from 'fs';
import * as path from 'path';
import { DataToGetProblemImage } from "../src/interfaces";


ipcMain.handle("get-solved-problems",(event: IpcMainInvokeEvent, msg: string): string => {
    
    //console.log(event);
    //console.log(msg);

    return process.versions.node;
});

// Función para guardar datos en un archivo JSON
ipcMain.handle('saveData', async (event: IpcMainInvokeEvent, data) => {
    const filePath = path.join(app.getPath('userData'), 'data.json'); // Directorio adecuado para la aplicación
    try {
      // Guardamos los datos como JSON
      await fs.promises.writeFile(filePath, JSON.stringify(data), 'utf-8');
      console.log("saving");
      
      return { success: true };
    } catch (error: any) {
      console.error('Error al guardar los datos:', error);
      return { success: false, error: error?.message };
    }
});
  
// Función para leer datos de un archivo JSON
ipcMain.handle('loadCurrentProblemsFinished', async () => {
    const filePath = path.join(app.getPath('userData'), 'data.json');
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        //console.log("path: ", filePath);
        
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer los datos:', error);
        return null;
    }
});

// Función para leer imagen de problema
ipcMain.handle('loadImageForProblem', async (event: IpcMainInvokeEvent, data: DataToGetProblemImage) => {
    
        
    try {
        const filePath = path.join(app.getAppPath(),"src", 'assets', "problems", data.unit_id, "" + data.method_id, "" + data.problem_type + ".png");
        //console.log("url para imagen y problema: ", filePath);
        
        return "file://" + filePath;
    } catch (error) {
        console.error('Error al leer la imagen desde node:', error);
        return null;
    }
});