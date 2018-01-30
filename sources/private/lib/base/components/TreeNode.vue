<template lang="pug">
	.pm-tree-node(v-if="treeNode.name && treeNode.type != 'hidden'")
		.pm-btn-node(v-bind:class="{'pm-is-open': isOpen}", v-bind:style="{'padding-left': level+'rem'}", @click="clicked")
			i.pm.pm-icon-chevron(v-bind:class="{'invisible': !isDirectory || !hasChildren}")
			i.pm(v-bind:class="'pm-icon-'+treeNode.type")
			| {{treeNode.name}}
		tree-node(v-if="isDirectory && hasChildren && isOpen", v-for="treeNode in treeNode.children", v-bind:tree-node="treeNode", v-bind:level="level+1")
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
			hasChildren: function (){
				return this.treeNode && this.treeNode.children && this.treeNode.children.length;
			},
			isDirectory: function (){
				return this.treeNode && this.treeNode.type == "directory";
			}
		},
		methods: {
			clicked: function(){
				console.log("[clicked]", this.treeNode);
				if (this.isDirectory && this.hasChildren) {
					this.isOpen = !this.isOpen
				}
			}
		},
		watch: {
			isOpen: function(val){
				console.log("isOpen", val);
			},
			treeNode: function(val){
				console.log("treeNode", val);
			}
		}
	}
</script>
