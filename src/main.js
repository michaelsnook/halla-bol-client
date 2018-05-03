import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/styles/main.scss';
import config from '@/config.js';


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = config.api_url;
axios.defaults.headers.common['Content-Type'] = 'application/json';

window.App = new Vue({
  router,
  store,
  data: config,
  render: h => h(App),
}).$mount('#app');
