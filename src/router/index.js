import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import Daily from '@/components/Daily';
import Spread from '@/components/Spread';
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
    }
  ]
});
