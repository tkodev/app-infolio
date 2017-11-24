<template>
	<div id="root">
		<div class="windowbar">
			asdfas
		</div>
		<div class="row no-gutters">
			<div class="col col-3">
s
			</div>
			<div class="col col-3">
d
			</div>
			<div class="col col-3">
ds
			</div>
		</div>
	</div>
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
