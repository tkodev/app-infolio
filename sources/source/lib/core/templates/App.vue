<template>
	<div id="root">
		<div class="window">
			<header class="toolbar toolbar-header draggable">
				<h1 class="title">Header</h1>
			</header>
			<div class="window-content">
				<div class="pane-group">
					<div class="pane-sm sidebar">

					</div>
					<div class="pane">

					</div>
					<div class="pane">

					</div>
				</div>
			</div>
			<footer class="toolbar toolbar-footer">
				<h1 class="title">Footer</h1>
			</footer>
		</div>
	</div>
</template>

<script>
	import Hello from './Hello.vue'

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

<style>
	html {
		height: 100%;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: auto;
	}

	#app {
		color: #2c3e50;
		max-width: 600px;
		font-family: Source Sans Pro, Helvetica, sans-serif;
		text-align: center;
	}

	#app a {
		color: #42b983;
		text-decoration: none;
	}

	#app p {
		text-align: justify;
	}

	.logo {
		width: auto;
		height: 100px;
	}
</style>
