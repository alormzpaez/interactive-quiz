import {app, ipcMain, IpcMainInvokeEvent } from "electron"
import * as fs from 'fs';
import * as path from 'path';
import { DataToGetProblemImage } from "../src/interfaces";


ipcMain.handle("get-solved-problems",(event: IpcMainInvokeEvent, msg: string): string => {
    
    //console.log(event);
    //console.log(msg);

    return process.versions.node;
});

//Guardar usuarios
ipcMain.handle('getUsers', async (event: IpcMainInvokeEvent) => {
    const filePath = path.join(app.getPath('userData'), 'users.json'); // Directorio adecuado para la aplicación
    try {
      const data = await fs.promises.readFile(filePath, 'utf-8');
        //console.log("path: ", filePath);
        
        return JSON.parse(data);
    } catch (error: any) {
      console.error('Error al obtener los usuarios:', error);
      return [];
    }
});

ipcMain.handle('saveUsers', async (event: IpcMainInvokeEvent, data) => {
    const filePath = path.join(app.getPath('userData'), 'users.json'); // Directorio adecuado para la aplicación
    try {
      // Guardamos los datos como JSON
      await fs.promises.writeFile(filePath, JSON.stringify(data), 'utf-8');
      console.log("saving");
      
      return { success: true };
    } catch (error: any) {
      console.error('Error al guardar los usuarios:', error);
      return { success: false, error: error?.message };
    }
});

// Función para guardar datos en un archivo JSON
ipcMain.handle('saveData', async (event: IpcMainInvokeEvent, data, id) => {
    const filePath = path.join(app.getPath('userData'),"users",id, 'data.json'); // Directorio adecuado para la aplicación
    try {
        // Verificar si la carpeta del usuario existe
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }
        
 
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
ipcMain.handle('loadCurrentProblemsFinished', async (event: IpcMainInvokeEvent, id: string) => {
    
    try {
        const filePath = path.join(app.getPath('userData'), "users", id, 'data.json');

        // Crear directorio si no existe
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }

        // Validar existencia del archivo
        if (!fs.existsSync(filePath)) {
            // Crear archivo con contenido inicial
            
            await fs.promises.writeFile(filePath, [], 'utf-8');
        }
        
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
        let filePath: string;

        // Verificar si estamos en modo de desarrollo o producción
        console.log("env:", process.env.NODE_ENV);
        
        if (process.env.NODE_ENV !== 'development') {
            // En producción, usamos process.resourcesPath para obtener la ruta correcta dentro del paquete .asar
            filePath = path.join(process.resourcesPath, 'assets', 'problems', data.unit_id, `${data.method_id}`, `${data.problem_type}.png`);
        } else {
            // En desarrollo, usamos una ruta relativa a los recursos locales
            filePath = path.join(app.getAppPath(), "src", "assets", "problems", data.unit_id, "" + data.method_id, "" + data.problem_type + ".png");
        }

        console.log("Path generado:", filePath);
        return `file://${filePath}`;
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
        return null;
    }
});