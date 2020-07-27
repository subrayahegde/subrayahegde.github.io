import Vue from 'vue';
import App from './components/App.vue';
import store from './store/store';

import 'babel-polyfill'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
