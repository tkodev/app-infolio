import '../scss/app.scss'

import Vue from 'vue';
import App from 'Components/App.vue';
import TreeNode from 'Components/TreeNode.vue';

Vue.component('tree-node',TreeNode)

new Vue(App)
