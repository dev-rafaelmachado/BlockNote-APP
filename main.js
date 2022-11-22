const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    Width: 500,
    Height: 700,
    resizable: true,
    icon: __dirname+ '/imgs/notes.png',
  });

  win.loadFile("src/index.html");
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
