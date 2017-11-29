<template lang="pug">
	.pm-controls
		button.pm-btn-controls.pm-maximize-win(v-on:click="maximizeWin", aria-hidden="true")
			span.sr-only Maximize
		button.pm-btn-controls.pm-minimize-win(v-on:click="minimizeWin", aria-hidden="true")
			span.sr-only Minimize
		button.pm-btn-controls.pm-close-win(v-on:click="closeWin", aria-hidden="true")
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
