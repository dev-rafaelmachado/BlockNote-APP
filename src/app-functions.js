const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", () => {
  ipc.send("closeApp");
});