import { ipcMain as i, app as n, BrowserWindow as p } from "electron";
import { createRequire as f } from "node:module";
import { fileURLToPath as h } from "node:url";
import r from "node:path";
import * as m from "fs";
import * as d from "path";
i.handle("get-solved-problems", (s, e) => process.versions.node);
i.handle("saveData", async (s, e) => {
  const t = d.join(n.getPath("userData"), "data.json");
  try {
    return await m.promises.writeFile(t, JSON.stringify(e), "utf-8"), console.log("saving"), { success: !0 };
  } catch (a) {
    return console.error("Error al guardar los datos:", a), { success: !1, error: a == null ? void 0 : a.message };
  }
});
i.handle("loadCurrentProblemsFinished", async () => {
  const s = d.join(n.getPath("userData"), "data.json");
  try {
    const e = await m.promises.readFile(s, "utf-8");
    return JSON.parse(e);
  } catch (e) {
    return console.error("Error al leer los datos:", e), null;
  }
});
i.handle("loadImageForProblem", async (s, e) => {
  try {
    const t = d.join(process.resourcesPath, "assets", "problems", e.unit_id, `${e.method_id}`, `${e.problem_type}.png`);
    return console.log("Path generado:", t), `file://${t}`;
  } catch (t) {
    return console.error("Error al cargar la imagen:", t), null;
  }
});
f(import.meta.url);
const l = r.dirname(h(import.meta.url));
process.env.APP_ROOT = r.join(l, "..");
const c = process.env.VITE_DEV_SERVER_URL, w = r.join(process.env.APP_ROOT, "dist-electron"), P = r.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = c ? r.join(process.env.APP_ROOT, "public") : P;
let o;
function u() {
  if (o = new p({
    icon: r.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: r.join(l, "preload.mjs"),
      webSecurity: !1
    }
  }), o.webContents.on("did-finish-load", () => {
    o == null || o.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), o.webContents.openDevTools(), c)
    o.loadURL(c);
  else {
    const s = r.join(l, "../dist/index.html");
    o.loadFile(s);
  }
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), o = null);
});
n.on("activate", () => {
  p.getAllWindows().length === 0 && u();
});
n.whenReady().then(u);
export {
  w as MAIN_DIST,
  P as RENDERER_DIST,
  c as VITE_DEV_SERVER_URL
};
