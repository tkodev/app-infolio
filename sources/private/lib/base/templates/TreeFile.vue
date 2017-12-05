<template lang="pug">
	.pm-tree-file(v-if="notBlacklist")
		.pm-tree-entry(v-if="rootTree.name", v-bind:style="{'padding-left': levelPadding}", @click="toggleFolder")
			i.pm-tree-icon.fal(v-if="isFolder", v-bind:class="{'fa-folder': !open, 'fa-folder-open': open}", aria-hidden="true")
			i.pm-tree-icon.fal.fa-file(v-if="!isFolder", aria-hidden="true")
			| {{rootTree.name}}
		template(v-if="isFolder && open", v-for="rootTree in rootTree.children")
			tree-file(v-bind:root-tree="rootTree", v-bind:level="level+1")
</template>

<script>
	// init
	// settings
	export default {
		props: ['rootTree', 'level'],
		data: function(){
			return {
				open: false
			}
		},
		computed: {
			notBlacklist: function(){
				this.rootTree;
				if(this.rootTree.name){
					var hiddenMatch = this.rootTree.name.indexOf('.') == 0;
					var blacklist = ["node_modules", "bower_components"];
					var blacklistMatch = blacklist.includes(this.rootTree.name);
					return !(hiddenMatch || blacklistMatch);
				}
				return false;
			},
			levelPadding: function(){
				return this.level + 0.5 + 'rem'
			},
			isFolder: function(){
				return !!this.rootTree.children;
			}
		},
		methods: {
			toggleFolder: function(){
				if (this.isFolder) {
					this.open = !this.open
				}
			}
		},
		watch: {
			rootTree: function(val){
				console.log("rootTree", val);
			}
		}
	}
</script>
