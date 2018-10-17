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
  ]
});
