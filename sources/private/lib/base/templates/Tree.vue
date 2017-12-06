<template lang="pug">
	.pm-tree
		.pm-tree-topbar
			.btn-group.pm-stretch-x
				button.btn.btn-outline-light.pm-btn-block(type='button', v-on:click="getTreeNode")
					| {{treeNode.name || placeholder}}
				button.btn.btn-outline-light(type='button', v-on:click="getTreeNode")
					i.fa.fa-folder-open(aria-hidden="true", title="Browse")
		.pm-tree-content
			p(v-if="loading") Loading
			tree-node(v-bind:tree-node="treeNode", v-bind:level="0")
</template>

<script>
	// init
	const {ipcRenderer} = require('electron');
	// settings
	export default {
		data: function() {
			return {
				placeholder: 'Open Portfolio Root',
				treeNode: {
					name: ''
				},
				loading: false
			}
		},
		methods: {
			getTreeNode: function(){
				this.loading = true
				ipcRenderer.send('getTreeNode')
		  }
		},
		mounted: function() {
		  ipcRenderer.on('getTreeNode', (event, arg) => {
				if(arg){
					this.treeNode = arg;
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
			treeNode: function(val){
				console.log("treeNode", val);
			}
		}
	}
</script>
