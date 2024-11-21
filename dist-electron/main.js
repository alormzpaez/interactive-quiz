import { ipcMain as l, app as t, BrowserWindow as d, Menu as c } from "electron";
import { createRequire as h } from "node:module";
import { fileURLToPath as _ } from "node:url";
import n from "node:path";
import * as u from "fs";
import * as i from "path";
l.handle("get-solved-problems", (r, e) => process.versions.node);
l.handle("saveData", async (r, e) => {
  const s = i.join(t.getPath("userData"), "data.json");
  try {
    return await u.promises.writeFile(s, JSON.stringify(e), "utf-8"), console.log("saving"), { success: !0 };
  } catch (a) {
    return console.error("Error al guardar los datos:", a), { success: !1, error: a == null ? void 0 : a.message };
  }
});
l.handle("loadCurrentProblemsFinished", async () => {
  const r = i.join(t.getPath("userData"), "data.json");
  try {
    const e = await u.promises.readFile(r, "utf-8");
    return JSON.parse(e);
  } catch (e) {
    return console.error("Error al leer los datos:", e), null;
  }
});
l.handle("loadImageForProblem", async (r, e) => {
  try {
    let s;
    return console.log("env:", process.env.NODE_ENV), process.env.NODE_ENV !== "development" ? s = i.join(process.resourcesPath, "assets", "problems", e.unit_id, `${e.method_id}`, `${e.problem_type}.png`) : s = i.join(t.getAppPath(), "src", "assets", "problems", e.unit_id, "" + e.method_id, "" + e.problem_type + ".png"), console.log("Path generado:", s), `file://${s}`;
  } catch (s) {
    return console.error("Error al cargar la imagen:", s), null;
  }
});
h(import.meta.url);
const p = n.dirname(_(import.meta.url));
process.env.APP_ROOT = n.join(p, "..");
const m = process.env.VITE_DEV_SERVER_URL, R = n.join(process.env.APP_ROOT, "dist-electron"), g = n.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = m ? n.join(process.env.APP_ROOT, "public") : g;
let o;
function f() {
  if (o = new d({
    icon: n.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: n.join(p, "preload.mjs"),
      webSecurity: !1
    }
  }), o.webContents.on("did-finish-load", () => {
    o == null || o.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), o.maximize(), process.platform !== "darwin" && c.setApplicationMenu(null), process.platform === "darwin") {
    const r = c.buildFromTemplate([]);
    c.setApplicationMenu(r);
  }
  if (m)
    o.loadURL(m);
  else {
    const r = n.join(p, "../dist/index.html");
    o.loadFile(r);
  }
}
t.on("window-all-closed", () => {
  process.platform !== "darwin" && (t.quit(), o = null);
});
t.on("activate", () => {
  d.getAllWindows().length === 0 && f();
});
t.whenReady().then(f);
export {
  R as MAIN_DIST,
  g as RENDERER_DIST,
  m as VITE_DEV_SERVER_URL
};
