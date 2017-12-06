<template lang="pug">
	.pm-tree-node
		template(v-if="isValid && !isBlacklist")
			.pm-tree-entry(v-bind:style="{'padding-left': levelPadding}", @click="toggleOpen")
				i.pm-btn-chevron(v-bind:class="[treeNode.type, {'is-open': isOpen}]")
				i.pm-btn-icon(v-bind:class="[treeNode.type]")
				| {{treeNode.name}} {{treeNode.type}}
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
