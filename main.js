const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    Width: 500,
    Height: 700,
    resizable: true,
    frame: false,
    icon: __dirname + "/imgs/notes.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    },
  });

  win.loadFile("src/index.html");

  ipc.on("closeApp", () => {
    win.close();
  });
}

//  ->->- Menu ->->-
const templateMenu = [];
const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
