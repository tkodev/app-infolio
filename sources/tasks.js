const dirTree = require('directory-tree');

process.on('message', function(options){
	if(options.channel == "getRootTree"){
		if( options.data && options.data != false ){
			var rslt = dirTree(options.data[0], {exclude:/\/\..*\//})
			process.send(rslt);
		} else {
			process.send(null);
		}
	} else {
		process.send(null);
	}
});
