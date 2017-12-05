import '../scss/app.scss'

import Vue from 'vue';
import App from 'Templates/App.vue';
import TreeFile from 'Templates/TreeFile.vue';

Vue.component('tree-file',TreeFile)

new Vue({
  el: '#app',
  render: h => h(App)
})
