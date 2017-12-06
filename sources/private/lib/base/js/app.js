import '../scss/app.scss'

import Vue from 'vue';
import App from 'Templates/App.vue';
import TreeNode from 'Templates/TreeNode.vue';

Vue.component('tree-node',TreeNode)

new Vue({
  el: '#app',
  render: h => h(App)
})
