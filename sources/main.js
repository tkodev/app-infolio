// Basic init
const electron = require('electron')
const {app, BrowserWindow, dialog, ipcMain} = electron
const path = require('path')
const {fork} = require('child_process');
const death = require('death'); //this is intentionally ugly
var forks = [];

// Let electron reloads by itself when webpack watches changes in ./app/
// require('electron-reload')(__dirname)
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// To avoid being garbage collected
let mainWindow;
let backWindow;

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
	  minWidth: 1024,
		minHeight: 768,
		width: 1024,
		height: 768,
		frame: false
	});
	// Load the index.html of the app.
	mainWindow.loadURL(`file://${__dirname}/public/index.html`)
	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		cleanup();
		mainWindow = null;
	});
})

// ipc event - get root tree
ipcMain.on('getRootTree', (event, arg) => {
	var rootArr = dialog.showOpenDialog(mainWindow, {
		properties: ['openDirectory']
	})
	var compute = fork(`${__dirname}/compute.js`);
	forks.push(compute);
	compute.send(rootArr);
	compute.on('message', function(rootTree){
		mainWindow.webContents.send('getRootTree', rootTree)
		compute.kill('SIGHUP');
	});
})

function cleanup(signal, err) {
	console.log(`\n[cleanup] Killing ${forks.length} forked processes\n`);
	forks.forEach(function(element){
		try {
			element.kill('SIGHUP');
		} finally {}
	})
}

death(cleanup)
