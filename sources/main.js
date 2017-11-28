// Basic init
const electron = require('electron')
const {app, BrowserWindow, dialog, ipcMain} = electron
const path = require('path')
const dirTree = require('directory-tree');

// Let electron reloads by itself when webpack watches changes in ./app/
// require('electron-reload')(__dirname)
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// To avoid being garbage collected
let mainWindow;

// app event - 'window-all-closed'
app.on('window-all-closed', () => {
	// leave app running on macos (standard behaviour)
	if (process.platform != 'darwin') {
    app.quit();
  }
});

// app event - ready
app.on('ready', () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
	  'minWidth': 1024,
		'minHeight': 768,
		'width': 1024,
		'height': 768,
		'frame': false
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

// ipc event - open-portfolio-root
ipcMain.on('getRootPath', (event, arg) => {
	var rootPath = dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  })
	var rootTree = dirTree(rootPath[0]);
  // event.returnValue = 'pong'
	event.sender.send('returnRootPath', {
		rootPath,
		rootTree
	})
})
