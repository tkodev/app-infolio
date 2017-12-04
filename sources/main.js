// ****************************************************************************************************
// Dependency Init
// ****************************************************************************************************

// init
const electron = require('electron');
const {app, BrowserWindow, dialog, ipcMain} = electron;
const tasksEngine = require('./tasks-engine.js')(electron, './tasks.js');
const path = require('path');
const death = require('death');


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

// app ready
app.on('ready', () => {
	// create the browser window.
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
	// tasks - create a task on ipc channel "test", returning data for use in task
	tasksEngine.init(mainWindow, {
		channel: "getRootTree",
		data: function(arg){
			return dialog.showOpenDialog(mainWindow, {properties: ['openDirectory']})
		},
		timeout: 3000
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
	tasksEngine.kill();
}
