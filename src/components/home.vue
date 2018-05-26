<template>
  <div>
    <div class="home-title">
      <img class="logo" src="../assets/logo.jpg">
      <h1> Tarobot </h1>
      <p>塔羅機器人</p>
    </div>
    <divider>{{ msg }}</divider>
    <div class="start">
      <x-button link="start" class="button" :gradients="['#FF2719', '#FF61AD']">開始使用</x-button>
      <x-button :link="{name:'result',params:{num:1}}" class="button" :gradients="['#FF2719', '#FF61AD']">直接抽一張</x-button>
    </div>
  </div>
</template>

<script>
import { XButton,Divider } from 'vux'

export default {
  components: {
    XButton,Divider
  },
  data(){
    return{
      msg:"Let's Start From Here"
    }
  },
  created(){
    const offline = ()=>{
      let s_result = require('./draw.js').s_result;
      let d = s_result(78);
      (async ()=>{
        for(let i=0;i<78;i++){
          let res = await fetch(d[i].path);
        }
      })();
    };

    if ('serviceWorker' in navigator){
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        offline();
      }else{
        this.msg = 'Add to home screen (using offline)';
        //do something to tell user add to homescreen
      }
    }else{
        //do not cache like a monkey...
    }
  }
}
</script>

<style scoped>
.home-title{
  padding-top:30px;
  margin-bottom: 20px;
}
.logo {
  border-radius: 50%;
  width: 150px;
  height: 150px
}
.start {
  margin:40px;
}
</style>
