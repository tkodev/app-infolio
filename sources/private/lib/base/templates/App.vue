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
				.pm-pane-topbar
					.pm-logo
						.pm-logo-title
							i.fa.fa-magic(aria-hidden="true", title="App Logo")
							| {{logoTitle}}
						.pm-logo-tesc
							| {{logoDesc}}
				.pm-pane-content
					|
				.pm-pane-botbar
					| test
			.pm-pane.pm-beta
				.pm-pane-topbar.justify-content-center
					i.fa.fa-angle-double-right(aria-hidden="true", title="App Logo")
				.pm-pane-content.justify-content-center
				.pm-pane-botbar
					| test
			.pm-pane.pm-omega
				.pm-pane-topbar
				.pm-pane-content
					| Text
				.pm-pane-botbar
					| test
</template>

<script>
	import Navpane from './Navpane.vue'

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell

	export default {
		data() {
			return {
				logoTitle: 'InFolio',
				logoDesc: 'Portfolio Management'
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
