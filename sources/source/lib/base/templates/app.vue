<template lang="pug">
	#app
		#app-bar
			#logo
				i.fa.fa-magic
				| Portfolio Manager
			#controls
				a#maximize(href="#")
					i.fa.fa-plus-circle
				a#minimize(href="#")
					i.fa.fa-minus-circle
				a#close(href="#")
					i.fa.fa-times-circle
		#app-row.row
			#app-col-primary.col.col-3.app-col
				| Nav
			#app-col-secondary.col.col-1.app-col
				| Icons
			#app-col-content.col.col-8.app-col
				| Content
</template>

<script>
	import Hello from './hello.vue'

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell

	export default {
		data() {
			return {
				tester: 'Hello!'
			}
		},
		components: {
			Hello
		},
		methods: {
			link: (url) => {
				shell.openExternal(url)
			}
		}
	}
</script>
