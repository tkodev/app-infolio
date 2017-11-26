<template lang="pug">
	#app
		.pm-titlebar
				a.pm-btn-icon.maximize.text-success(href="#")
					i.fa.fa-plus-circle(aria-hidden="true", title="Maximize App")
				a.pm-btn-icon.minimize.text-warning(href="#")
					i.fa.fa-minus-circle(aria-hidden="true", title="Minimize App")
				a.pm-btn-icon.close.text-danger(href="#")
					i.fa.fa-times-circle(aria-hidden="true", title="Close App")
		.pm-scaffold
			.pm-scaffold-col.primary
				.pm-scaffold-titlebar
					.pm-logo
						i.fa.fa-times-circle(aria-hidden="true", title="App Logo")
						span {{appTitle}}
				.pm-scaffold-content
					Nav
			.pm-scaffold-col.secondary
				.pm-scaffold-titlebar
					| Content
				.pm-scaffold-content
					| Text
</template>

<script>
	import Nav from './Nav.vue'

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell

	export default {
		data() {
			return {
				appTitle: 'HTKO Portfolio Manager'
			}
		},
		components: {
			Nav
		},
		methods: {
			link: (url) => {
				shell.openExternal(url)
			}
		}
	}
</script>
