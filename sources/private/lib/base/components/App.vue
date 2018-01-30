<template lang="pug">
	#app
		controls
		.pm-pane-container
			.pm-pane.pm-alpha
				.pm-pane-topbar
					.pm-headline
						.pm-title.font-weight-bold
							i.fa.fa-magic.mr-1(aria-hidden="true", title="App Logo")
							| {{logoTitle}}
						.pm-desc
							| {{logoDesc}}
				.pm-pane-content
					tree
				.pm-pane-botbar
					.input-group.w-100
						input.form-control(type='text', placeholder="Search for project", aria-label="Search for project")
						span.input-group-btn
							button.btn.btn-outline-light(type='button')
								i.fa.fa-search(aria-hidden="true", title="Search for Project")
			.pm-pane.pm-beta
				.pm-pane-topbar.justify-content-center
					i.fa.fa-angle-double-right(aria-hidden="true")
				.pm-pane-content.p-0
					button.pm-btn-tab
						i.fal.fa-2x.fa-newspaper(aria-hidden="true")
					button.pm-btn-tab
						i.fal.fa-2x.fa-tags(aria-hidden="true")
					button.pm-btn-tab
						i.fal.fa-2x.fa-images(aria-hidden="true")
				.pm-pane-botbar.justify-content-center
					button
						i.fa.fa-cog(aria-hidden="true")
			.pm-pane.pm-omega
				.pm-pane-topbar
					.pm-headline
						.pm-title
							i.fa.fa-archive.mr-1(aria-hidden="true", title="App Logo")
							| Project Name
						.pm-desc
							a(href="#") /path/to/project/directory
				.pm-pane-content
					| Test
				.pm-pane-botbar
					| Test
</template>

<script>
	// init
	import Tree from 'Components/Tree.vue'
	import Controls from 'Components/Controls.vue'
	// With shell.openExternal(url) is how external urls must be handled, not href
	const {shell} = require('electron')
	// settings
	export default {
		el: '#app',
		data: function() {
			return {
				logoTitle: 'InFolio',
				logoDesc: 'Portfolio Management'
			}
		},
		components: {
			'tree': Tree,
			'controls': Controls
		},
		methods: {
			link: (url) => {
				shell.openExternal(url)
			}
		}
	}
</script>
