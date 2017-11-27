<template lang="pug">
	.pm-controls
		a.pm-btn-controls.pm-maximize-win(href="#", v-on:click="maximizeWin" aria-hidden="true")
			span.sr-only Maximize
		a.pm-btn-controls.pm-minimize-win(href="#", v-on:click="minimizeWin" aria-hidden="true")
			span.sr-only Minimize
		a.pm-btn-controls.pm-close-win(href="#", v-on:click="closeWin" aria-hidden="true")
			span.sr-only Close
</template>

<script>
	const remote = require('electron').remote;
	const curWin = remote.getCurrentWindow();
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
