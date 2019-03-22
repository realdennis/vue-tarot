import Vue from 'vue';
import 'reset-css';
//For reset browser default CSS
import router from './router';
import i18n from './i18n';

//LocalStorage Use
import Storage from 'vue-ls';
Vue.use(Storage);

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faHandLizard,
  faInfoCircle,
  faAngleUp,
  faRedo
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faLine,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faDotCircle,
  faHome,
  faHandLizard,
  faInfoCircle,
  faAngleUp,
  faTwitterSquare,
  faLine,
  faFacebookSquare,
  faRedo
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//For all browser smooth scroll 
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

Vue.config.productionTip = false;
import App from './App.vue';
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

//Service Worker
// import './registerServiceWorker';