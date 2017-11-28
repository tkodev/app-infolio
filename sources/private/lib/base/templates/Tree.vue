<template lang="pug">
	.pm-tree
		.pm-tree-topbar
			.btn-group.pm-stretch-x
				button.btn.btn-outline-light.pm-btn-block(type='button', v-on:click="openFolioRoot")
					| {{rootDefault}} {{rootPath}}
				button.btn.btn-outline-light(type='button', v-on:click="openFolioRoot")
					i.fa.fa-folder-open(aria-hidden="true", title="Browse")
		.pm-tree-content
</template>

<script>
	// init
	const {ipcRenderer} = require('electron');
	// settings
	export default {
		data: function() {
			return {
				rootDefault: 'Open Portfolio Root',
				rootPath: '',
				rootTree: {}
			}
		},
		methods: {
			openFolioRoot: () => {
				ipcRenderer.send('getRootPath', 'pingo')
		  }
		},
		mounted: function() {
		  ipcRenderer.on('returnRootPath', (event, arg) => {
				Vue.set(this, rootPath, arg.rootPath)
				Vue.set(this, rootTree, arg.rootTree)
		  })
		}
	}
</script>
