const Vue = require('vue');
const App = require('../templates/App.vue')

new Vue({
  el: '#app',
  render: h => h(App),
	data: {
		tester: "Adsfasdf"
	}
})
