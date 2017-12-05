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
			ipcMain.on(options.channel, function(event, argTrans){
				var task = fork(functionsPath);
				tasks[task.pid] = task;
				task.send({channel: options.channel, data: options.data(argTrans)});
				task.on('message', function(argRecv){
					windowObj.webContents.send(options.channel, argRecv)
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
