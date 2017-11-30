const dirTree = require('directory-tree');

process.on('message', function(rootArr){
	console.log('[compute] processing')
	process.send(dirTree(rootArr[0], {exclude:/\/\..*\//}));
	console.log('[compute] message sent');
});
