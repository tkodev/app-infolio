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
	// leave app running on macos (standard behaviour)
	if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {

	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		frame: false
	});

	// and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/public/index.html`)

	// Open the DevTools.
	//mainWindow.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		mainWindow = null;
	});

})
