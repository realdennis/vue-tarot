import Vue from 'vue';
import Router from 'vue-router';
import About from '@/views/About';
import Daily from '@/views/Daily';
import Spread from '@/views/Spread';
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
