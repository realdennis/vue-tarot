<template>
  <div id="app" @click.right="e=>{e.preventDefault()}">
    <x-icon v-if="pwa" @click="goBack" type="ios-arrow-thin-left" size="50" style="position:fixed;bottom:20;right:20;border:2px solid rgba(0, 0, 0,.5);border-radius:100%;z-index:100;"></x-icon>
	 <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    pwa(){
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) return true;
      return false;
    }
  },
  created(){

  },
  mounted(){

    window.addEventListener('appinstalled', (evt) => {
      app.logEvent('a2hs', 'installed');
    });
    
    this.$root.$i18n.locale = navigator.language || navigator.userLanguage; 
    //set i18n locale prevent fallback

    if(innerWidth>innerHeight){
      //console.log('computer')
      document.getElementById('app').style.width="50vw";
    }
  },
  methods:{
    goBack(){
      if(this.$route.path==='/') return;
      history.go(-1);
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app{
	text-align: center;
  margin:0px auto;
}
*{
  font-weight:600;
  text-shadow: rgba(255,255,250,.4) 0.02em 0.05em 0.3em;
  font-family: Monaco,Helvetica, monospace, "Lucida Console","Comic Sans MS", sans-serif;
}

body{

  background-color: rgba(230, 180, 173,0.4);

  box-sizing:border-box;
  -webkit-user-select:none ;
  -moz-user-select: none ;
  -ms-user-select: none ;
  -o-user-select: none ;
  user-select: none ;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.button {
  border-radius: 150px !important;
  margin:1em 0;
}


.title {
  padding-top:30px;
  margin-bottom: 50px;
}

img{
  width:150px;
}
.result-img{

  height:260px;
}

a{
  color:rgb(3, 57, 101);
}

a:hover{
  color:rgba(33,133,201,.5);
}

a:visited{
  color:rgba(3, 57, 101,.5);

}

.choose{
  padding:10px;
}
</style>
