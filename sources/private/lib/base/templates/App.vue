<template lang="pug">
	#app
		Controls
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
					Tree
				.pm-pane-botbar
					| Test
			.pm-pane.pm-beta
				.pm-pane-topbar.justify-content-center
					i.fa.fa-angle-double-right(aria-hidden="true", title="App Logo")
				.pm-pane-content.justify-content-center
					| Test
				.pm-pane-botbar
					| Test
			.pm-pane.pm-omega
				.pm-pane-topbar
					| Test
				.pm-pane-content
					| Test
				.pm-pane-botbar
					| Test
</template>

<script>
	import Tree from './Tree.vue'
	import Controls from './Controls.vue'

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
			Tree,
			Controls
		},
		methods: {
			link: (url) => {
				shell.openExternal(url)
			}
		}
	}
</script>
