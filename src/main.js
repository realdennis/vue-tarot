import Vue from 'vue';
import 'reset-css';
import 'vue2-animate/dist/vue2-animate.min.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import About from '@/components/about';
import Daily from '@/components/daily';
import Spread from '@/components/spread';
import SpreadResult from '@/components/spreadresult';
import Storage from 'vue-ls';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
Vue.use(Storage);
Vue.use(VueRouter);
Vue.config.productionTip = false;

import langTw from '@/assets/lang/tw';
import langCn from '@/assets/lang/cn';
import langEn from '@/assets/lang/en';
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'zh-TW': langTw,
    'zh-CN': langCn,
    en: langEn
  }
});

const routes = [
  {
    path: '/',
    component: Daily
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/daily',
    component: Daily
  },
  {
    path: '/spread',
    component: Spread
  },
  {
    name: 'result',
    path: '/result/:num',
    component: SpreadResult
  }
];
const router = new VueRouter({
  routes
});


import { library } from '@fortawesome/fontawesome-svg-core';
import {  faDotCircle } from '@fortawesome/free-regular-svg-icons';
import {  faHome,faHandLizard,faInfoCircle,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {  faTwitterSquare,faLine,faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(faDotCircle);
library.add(faHome);
library.add(faHandLizard);
library.add(faInfoCircle);
library.add(faAngleUp);
library.add(faTwitterSquare);
library.add(faLine);
library.add(faFacebookSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
