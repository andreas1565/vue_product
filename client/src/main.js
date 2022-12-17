import '@babel/polyfill';
import {createApp} from 'vue';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// vue 2
/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app'); */

// vue3
import './plugins/bootstrap-vue';
createApp(App).use(router).use(store).mount('#app');