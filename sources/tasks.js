const dirTree = require('directory-tree');

function hasChildren(treeNode){
	return treeNode && treeNode.children && treeNode.children.length;
}

function isDirectory(treeNode){
	return treeNode && treeNode.type == "directory" || treeNode.type == "folio";
}

function getFileType(treeNode){
	var hidden = ["git"]
	var images = ["jpg", "jpeg", "png", "gif", "tiff", "svg", "webp"];
	var documents = ["txt", "md", "nfo", "log", "rtf", "pdf", "doc", "docx"]
	if (treeNode.name.charAt(0) == "." || !treeNode.name){
		return "hidden"
	} else if (isDirectory(treeNode)){
		var isFolio = hasChildren(treeNode) && treeNode.children.reduce(function(accumulator, child){
			return accumulator || (child.name.toLowerCase() == "infolio.json" && child.type == "file")
		}, false)
		return isFolio ? 'folio' : 'directory';
	} else {
		var ext = treeNode.extension.toLowerCase().replace(".", "");
		if (hidden.indexOf(ext) > -1){
			return "hidden"
		} else if (images.indexOf(ext) > -1){
			return "image"
		} else if (documents.indexOf(ext) > -1) {
			return "document"
		} else {
			return "file"
		}
	}
}

function filterTreeNode(treeNode){
	treeNode.type = getFileType(treeNode);
	if(isDirectory(treeNode) && hasChildren(treeNode)){
		treeNode.children = treeNode.children.map(function(child, idx){
			return filterTreeNode(child);
		}).sort(function(a, b){
			if(isDirectory(a) && !isDirectory(b)) return -1;
			if(!isDirectory(a) && isDirectory(b)) return 1;
			return a.name.localeCompare(b.name)
		})
	}
	return treeNode;
}

process.on('message', function(options){
	if(options.channel == "getTreeNode"){
		if( options.data && options.data != false ){
			var rslt = dirTree(options.data[0], {exclude:/\/\..*\//})
			rslt = filterTreeNode(rslt);
			process.send(rslt);
		} else {
			process.send(null);
		}
	} else {
		process.send(null);
	}
});
