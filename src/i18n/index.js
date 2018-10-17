import Vue from 'vue';
import VueI18n from 'vue-i18n';

import langTw from './lang/tw';
import langCn from './lang/cn';
import langEn from './lang/en';
Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'zh-TW': langTw,
    'zh-CN': langCn,
    en: langEn
  }
});
