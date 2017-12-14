<template lang="pug">
	.pm-tree-node
		template(v-if="isValid && !isBlacklist")
			.pm-btn-node(v-bind:class="[fileIcon, {'pm-is-open': isOpen}]", v-bind:style="{'padding-left': levelPadding}", @click="toggleOpen")
				i.pm.pm-icon-chevron
				i.pm.pm-icon-filetype(v-bind:class="[fileIcon]")
				| {{treeNode.name}}
			tree-node(v-if="isOpen", v-for="treeNode in treeNode.children", v-bind:tree-node="treeNode", v-bind:level="level+1")
</template>

<script>
	// init

	// settings
	export default {
		props: ['treeNode', 'level'],
		data: function(){
			return {
				isOpen: false
			}
		},
		computed: {
			fileIcon: function(){
				var type = this.treeNode.type;
				if(type == "directory"){
					return "pm-icon-directory"
				} else {
					return "pm-icon-file"
				}
			},
			levelClass: function(){
				return 'level_' + this.level;
			},
			levelPadding: function(){
				return this.level + 'rem';
			},
			isValid: function(){
				return !!(this.treeNode.name)
			},
			isBlacklist: function(){
				if(this.treeNode.name){
					var hiddenMatch = this.treeNode.name.indexOf('.') == 0;
					var blacklist = ["node_modules", "bower_components"];
					var blacklistMatch = blacklist.includes(this.treeNode.name);
					return hiddenMatch || blacklistMatch;
				}
				return false;
			}
		},
		methods: {
			toggleOpen: function(){
				if (this.treeNode.type == "directory") {
					this.isOpen = !this.isOpen
				}
			}
		},
		watch: {
			treeNode: function(val){
				console.log("treeNode", val);
			}
		}
	}
</script>
