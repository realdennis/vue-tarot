// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import 'reset-css';
//import FastClick from 'fastclick'
import VueRouter from 'vue-router';
import App from './App';
import Home from '@/components/home';
import Start from '@/components/start';

import About from '@/components/about';
import Daily from '@/components/daily';
import Disclaimer from '@/components/disclaimer';
import Spread from '@/components/spread';
import SpreadResult from '@/components/spreadresult';
import Storage from 'vue-ls';

require('vue2-animate/dist/vue2-animate.min.css');

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import langTw from '@/assets/lang/tw';
import langCn from '@/assets/lang/cn';
import langEn from '@/assets/lang/en';

Vue.use(Storage);
Vue.use(VueRouter);

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
    path: '/start',
    component: Start
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
    path: '/disclaimer',
    component: Disclaimer
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

//FastClick.attach(document.body)

Vue.config.productionTip = false;

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

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
