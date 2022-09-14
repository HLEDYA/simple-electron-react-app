const { BrowserWindow, app } = require("electron");

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

app.whenReady().then(createWindow);

console.log("hello there");
