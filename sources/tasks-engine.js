module.exports = function(electron, functionsPath){
	const {fork} = require('child_process');
	const {ipcMain} = electron;
	var tasks = {};
	function killTask(task){
		try {
			// kill process
			task.kill('SIGHUP');
		} catch(e) {
			throw new Error(e);
		}
	}
	return {
		init: function(windowObj, options){
			ipcMain.on(options.channel, (event) => {
				// console.log('[tasks] creating task');
				var task = fork(functionsPath);
				tasks[task.pid] = task;
				// console.log('[tasks] sending data');
				task.send({channel: options.channel, data: options.data()});
				// console.log('[tasks] awaiting task');
				task.on('message', function(data){
					// console.log('[tasks] returning data');
					windowObj.webContents.send(options.channel, data)
					delete tasks[task.pid];
					killTask(task);
				});
			})
		},
		kill: function(){
			var pids = Object.keys(tasks);
			// console.log(`[tasks] Killing ${pids.length} tasks(s)`)
			pids.forEach(function(pid){
				killTask(tasks[pid]);
			})
		}
	}
}
