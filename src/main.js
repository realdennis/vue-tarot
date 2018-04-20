// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from '@/components/home'
import Start from '@/components/start'

import About from '@/components/stage1/about'
import Daily from '@/components/stage1/daily'
import Disclaimer from '@/components/stage1/disclaimer'
import Spread from '@/components/stage1/spread'
import SpreadResult from '@/components/stage1/spreadresult'

import { XButton,Divider,Flexbox,FlexboxItem } from 'vux'


Vue.component('XButton', XButton)
Vue.component('divider', Divider)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)


Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},{
  path: '/start',
  component:Start,
},{
	path: '/about',
	component:About,
},{
	path: '/daily',
	component:Daily,
},{
	path: '/disclaimer',
	component:Disclaimer,
},{
	path: '/spread',
	component:Spread,
},{
	name:'result',
	path: '/result/:num',
	component:SpreadResult
}
]
const router = new VueRouter({
  routes
})


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
