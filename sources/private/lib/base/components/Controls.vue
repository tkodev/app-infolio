<template lang="pug">
	.pm-controls
		button.pm-btn-controls(v-on:click="maximizeWin")
			i.pm.pm-icon-maximize(aria-hidden="true")
			span.sr-only Maximize
		button.pm-btn-controls(v-on:click="minimizeWin")
			i.pm.pm-icon-minimize(aria-hidden="true")
			span.sr-only Minimize
		button.pm-btn-controls(v-on:click="closeWin")
			i.pm.pm-icon-close(aria-hidden="true")
			span.sr-only Close
</template>

<script>
	// init
	const {remote} = require('electron');
	const curWin = remote.getCurrentWindow();
	// settings
	export default {
		methods: {
			maximizeWin: () => {
				if (curWin.isMaximized()) {
					curWin.unmaximize();
				} else {
					curWin.maximize();
				}
		  },
			minimizeWin: () => {
				curWin.minimize();
			},
			closeWin: () => {
				curWin.close();
			}
		}
	}
</script>
