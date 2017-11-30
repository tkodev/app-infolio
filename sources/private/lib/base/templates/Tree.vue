<template lang="pug">
	.pm-tree
		.pm-tree-topbar
			.btn-group.pm-stretch-x
				button.btn.btn-outline-light.pm-btn-block(type='button', v-on:click="openFolioRoot")
					| {{rootTree.name || rootDefault}}
				button.btn.btn-outline-light(type='button', v-on:click="openFolioRoot")
					i.fa.fa-folder-open(aria-hidden="true", title="Browse")
		.pm-tree-content
			template(v-if="loading")
				| {{loading + ""}}
			template(v-if="rootTree.name")
				| {{rootTree.name}} {{rootTree.path}}
</template>

<script>
	// init
	const {ipcRenderer} = require('electron');
	// settings
	export default {
		data: function() {
			return {
				rootDefault: 'Open Portfolio Root',
				rootTree: {
					name: '',
					path: '',
					tree: {}
				},
				loading: false
			}
		},
		methods: {
			openFolioRoot: function(){
				this.loading = true
				ipcRenderer.send('getRootTree')
		  }
		},
		mounted: function() {
		  ipcRenderer.on('getRootTree', (event, rootTree) => {
				if(rootTree){
					this.rootTree = rootTree;
					this.loading = false
				} else {
					this.loading = false
				}
			})
		},
		watch: {
			loading: function(val){
				console.log("loading", val);
			},
			rootTree: function(val){
				console.log("rootTree", val);
			}
		}
	}
</script>
