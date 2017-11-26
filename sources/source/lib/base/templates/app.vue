<template lang="pug">
	#app
		.pm-controls
			a.pm-btn-icon.text-success(href="#")
				i.fa.fa-plus-circle(aria-hidden="true", title="Maximize App")
			a.pm-btn-icon.text-warning(href="#")
				i.fa.fa-minus-circle(aria-hidden="true", title="Minimize App")
			a.pm-btn-icon.text-danger(href="#")
				i.fa.fa-times-circle(aria-hidden="true", title="Close App")
		.pm-scaffold
			.pm-scaffold-col.primary
				.pm-scaffold-titlebar
					.pm-logo
						i.fa.fa-magic(aria-hidden="true", title="App Logo")
						span {{appTitle}}
				.pm-scaffold-content
					Navpane
			.pm-scaffold-col.secondary
				.pm-scaffold-titlebar
					a.pm-btn-icon(href="#")
						i.far.fa-newspaper(aria-hidden="true")
						span Readme
					a.pm-btn-icon(href="#")
						i.far.fa-tags(aria-hidden="true")
						span Metadata
					a.pm-btn-icon(href="#")
						i.far.fa-images(aria-hidden="true")
						span Assets
				.pm-scaffold-content
					| Text
</template>

<script>
	import Navpane from './Navpane.vue'

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell

	export default {
		data() {
			return {
				appTitle: 'Portfolio Manager'
			}
		},
		components: {
			Navpane
		},
		methods: {
			link: (url) => {
				shell.openExternal(url)
			}
		}
	}
</script>
