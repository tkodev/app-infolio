// ****************************************************************************************************
// Dependency Init
// ****************************************************************************************************

// init
const electron = require('electron');
const {app, BrowserWindow, dialog, ipcMain} = electron;
const {fork} = require('child_process');
const path = require('path');
const death = require('death'); //this is intentionally ugly
var forks = [];


// ****************************************************************************************************
// Electron Reload
// ****************************************************************************************************

// Reload electron - watch for changes in ./app/
// require('electron-reload')(__dirname)
require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});


// ****************************************************************************************************
// Window Lifecycle
// ****************************************************************************************************

// avoid garbage collection
let mainWindow;

// create the browser window.
app.on('ready', () => {
	mainWindow = new BrowserWindow({
	  minWidth: 1024,
		minHeight: 768,
		width: 1024,
		height: 768,
		frame: false
	});
	mainWindow.loadURL(`file://${__dirname}/public/index.html`)
	mainWindow.on('closed', () => {
		cleanup();
		mainWindow = null;
	});
})

// app closed
app.on('window-all-closed', () => {
	// leave app running on macos (standard behaviour)
	if (process.platform != 'darwin') {
		cleanup();
		app.quit();
	}
});

// process death
death(cleanup)

// cleanup function
function cleanup(signal, err) {
	console.log(`\n*********`);
	console.log(`[cleanup] Killing ${forks.length} forked processes`);
	console.log(`*********\n`);
	forks.forEach(function(element){
		try {
			element.kill('SIGHUP');
		} finally {}
	})
}


// ****************************************************************************************************
// Events
// ****************************************************************************************************

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
