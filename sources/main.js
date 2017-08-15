// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')

// Let electron reloads by itself when webpack watches changes in ./app/
// require('electron-reload')(__dirname)
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// To avoid being garbage collected
let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {

    let mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.loadURL(`file://${__dirname}/public/index.html`)

		mainWindow.on('closed', () => {
			mainWindow = null;
		});

})
