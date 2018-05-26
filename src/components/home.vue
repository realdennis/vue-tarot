<template>
  <div>
    <div class="home-title">
      <img class="logo" src="../assets/logo.jpg" alt="Logo">
      <h1> Tarobot </h1>
      <p>{{$t("message.name")}}</p>
    </div>
    <divider>{{ msg }}</divider>
    <div class="start">
      <x-button link="start" class="button" :gradients="['#FF2719', '#FF61AD']">{{ $t("message.start") }}</x-button>
      <x-button :link="{name:'result',params:{num:1}}" class="button" :gradients="['#FF2719', '#FF61AD']">{{$t("message.draw")}}</x-button>
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
      msg:""
    }
  },
  methods:{
    offline(){
      if ('serviceWorker' in navigator){
        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
          this.msg = 'Progressive Web App'
          let s_result = require('./draw.js').s_result;
          let d = s_result(78);
          (async ()=>{
            for(let i=0;i<78;i++){
              let res = await fetch(d[i].path);
            }
          })();
        }else{
          this.msg = 'Add to Home Screen (Using offline)';
        }
      }else{
          //do not cache like a monkey...
          this.msg = "Let's Start From Here"
      }
    }
  },
  created(){
    this.offline()
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
