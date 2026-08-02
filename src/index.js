const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  Menu.setApplicationMenu(null);

  const mainWindow = new BrowserWindow({
    width: 950,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    show: false, // Скрываем окно до момента полной готовности
    backgroundColor: '#f0f0fa', // Устанавливаем стартовый фоновый цвет (из --bg-color в index.css)
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: true,
    resizable: true,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Показываем окно только после того, как интерфейс полностью подготовился к отрисовке
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});