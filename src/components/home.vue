<template>
  <div>
    <div class="home-title">
      <img @click="changeLocale" class="logo" src="../assets/logo.jpg" alt="Logo">
      <h1> Tarobot </h1>
      <p>{{$t("message.name")}}</p>
    </div>
    <divider>{{ msg }}</divider>

    <p style="opacity:.3;font-size:10px">Tap Logo to change language if you want</p>
    <div class="start">
      <x-button link="start" class="button" :gradients="['#FF2719', '#FF61AD']">{{ $t("message.start") }}</x-button>
      <x-button :link="{name:'result',params:{num:1}}" class="button" :gradients="['#FF2719', '#FF61AD']">{{$t("message.draw")}}</x-button>      

      <x-button @click.native="install" v-show="beforeinstall" plain type="default" class="button">Offline</x-button>
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
      msg:"Have fun!",
      beforeinstall:false,
      deferredPrompt:null
    }
  },
  mounted(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      this.beforeinstall = true;
    });
    this.offline()
  },
  methods:{
    install(){
      this.beforeinstall = false;
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
    },
    changeLocale(){
      const list = ['zh-TW','zh-CN','en'];
      let nowLocale = this.$root.$i18n.locale;

      let nowIndex = list.indexOf(nowLocale);
      let newIndex = (nowIndex+1)%3;

      this.$root.$i18n.locale = list[newIndex];

    },
    offline(){
      if ('serviceWorker' in navigator){
        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
          this.msg = 'Progressive Web App'
          let cardinfo = require('./draw.js').info;
          (async ()=>{
            for(let i=0;i<78;i++){
              let res = await fetch(cardinfo(i).path);
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
