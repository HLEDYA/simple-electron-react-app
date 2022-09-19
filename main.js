const { BrowserWindow, app } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
};

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);
