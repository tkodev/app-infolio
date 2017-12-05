<template lang="pug">
	.pm-tree-entry
		p(v-if="rootTree.name") {{rootTree.name}}
		TreeEntry(v-if="rootTree.children", v-for="rootTree in rootTree.children", v-bind:root-tree="rootTree")
</template>

<script>
	// init
	import TreeEntry from './TreeEntry.vue'
	// settings
	export default {
		// beforeCreate: function () {
		//   this.$options.components.TreeEntry = require('./TreeEntry.vue')
		// },
		name: "TreeEntryComponent",
		props: ['rootTree'],
		components: {
			TreeEntry
		},
		watch: {
			rootTree: function(val){
				console.log("rootTree", val);
			}
		}
	}
</script>
