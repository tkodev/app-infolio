<template lang="pug">
	#app
		.pm-controls
			a.pm-btn-controls.pm-maximize(href="#", aria-hidden="true")
				span.sr-only Maximize
			a.pm-btn-controls.pm-minimize(href="#", aria-hidden="true")
				span.sr-only Minimize
			a.pm-btn-controls.pm-close(href="#", aria-hidden="true")
				span.sr-only Close
		.pm-pane-container
			.pm-pane.pm-alpha
				.pm-pane-titlebar
					.pm-logo
						i.fa.fa-magic(aria-hidden="true", title="App Logo")
						span {{appTitle}}
				.pm-pane-content
					//- Navpane
			.pm-pane.pm-beta
				.pm-pane-titlebar
			.pm-pane.pm-omega
				.pm-pane-titlebar
				.pm-pane-content
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
				appTitle: 'InFolio'
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
