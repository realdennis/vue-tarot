import Vue from 'vue';
import 'reset-css';
//For reset browser default CSS
import router from './router';
import i18n from './i18n';
import Storage from 'vue-ls';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faHandLizard,
  faInfoCircle,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faLine,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import smoothscroll from 'smoothscroll-polyfill';
Vue.use(Storage);
library.add(
  faDotCircle,
  faHome,
  faHandLizard,
  faInfoCircle,
  faAngleUp,
  faTwitterSquare,
  faLine,
  faFacebookSquare
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

smoothscroll.polyfill();
Vue.config.productionTip = false;
import App from './App.vue';
import './registerServiceWorker';
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
