const dirTree = require('directory-tree');

process.on('message', function(rootArr){
	if ( rootArr != false ){
		process.send(dirTree(rootArr[0], {exclude:/\/\..*\//}));
	} else {
		process.send({});
	}
});
