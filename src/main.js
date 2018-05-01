import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/styles/main.scss';
import config from '@/config.js';


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueResource);

window.App = new Vue({
  router,
  store,
  data: config,
  render: h => h(App),
}).$mount('#app');
