import { ipcMain, app, BrowserWindow, Menu } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path$1 from "node:path";
import * as fs from "fs";
import * as path from "path";
ipcMain.handle("get-solved-problems", (event, msg) => {
  return process.versions.node;
});
ipcMain.handle("getUsers", async (event) => {
  const filePath = path.join(app.getPath("userData"), "users.json");
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
});
ipcMain.handle("saveUsers", async (event, data) => {
  const filePath = path.join(app.getPath("userData"), "users.json");
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data), "utf-8");
    console.log("saving");
    return { success: true };
  } catch (error) {
    console.error("Error al guardar los usuarios:", error);
    return { success: false, error: error == null ? void 0 : error.message };
  }
});
ipcMain.handle("saveData", async (event, data, id) => {
  const filePath = path.join(app.getPath("userData"), "users", id, "data.json");
  try {
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    await fs.promises.writeFile(filePath, JSON.stringify(data), "utf-8");
    console.log("saving");
    return { success: true };
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    return { success: false, error: error == null ? void 0 : error.message };
  }
});
ipcMain.handle("loadCurrentProblemsFinished", async (event, id) => {
  try {
    const filePath = path.join(app.getPath("userData"), "users", id, "data.json");
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      await fs.promises.writeFile(filePath, [], "utf-8");
    }
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al leer los datos:", error);
    return null;
  }
});
ipcMain.handle("loadImageForProblem", async (event, data) => {
  try {
    let filePath;
    console.log("env:", process.env.NODE_ENV);
    if (process.env.NODE_ENV !== "development") {
      filePath = path.join(process.resourcesPath, "assets", "problems", data.unit_id, `${data.method_id}`, `${data.problem_type}.png`);
    } else {
      filePath = path.join(app.getAppPath(), "src", "assets", "problems", data.unit_id, "" + data.method_id, "" + data.problem_type + ".png");
    }
    console.log("Path generado:", filePath);
    return `file://${filePath}`;
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    return null;
  }
});
createRequire(import.meta.url);
const __dirname = path$1.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path$1.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path$1.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path$1.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path$1.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path$1.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path$1.join(__dirname, "preload.mjs"),
      webSecurity: false
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  win.maximize();
  if (process.platform !== "darwin") {
    Menu.setApplicationMenu(null);
  }
  if (process.platform === "darwin") {
    const appMenu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(appMenu);
  }
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    const startURL = path$1.join(__dirname, "../dist/index.html");
    win.loadFile(startURL);
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
