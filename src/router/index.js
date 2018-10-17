import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/about';
import Daily from '@/components/daily';
import Spread from '@/components/spread';
import SpreadResult from '@/components/spreadresult';
Vue.use(Router);
export default new Router({
  routes: [
    {
      name:'daily',
      path: '/',
      component: Daily
    },
    {
      name:'about',
      path: '/about',
      component: About
    },
    {
      name:'spread',
      path: '/spread',
      component: Spread
    },
    {
      name:'spread-result',
      path: '/result/:num',
      component: SpreadResult
    }
  ]
});
