<template>
  <div id="app" @click.right="e=>{e.preventDefault()}">
    <x-icon @click="goBack" type="ios-arrow-thin-left" size="50" style="position:fixed;bottom:20;right:20;border:1px solid rgba(0, 0, 0,.5);border-radius:100%;z-index:100;"></x-icon>
	 <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    if(innerWidth>innerHeight){
      console.log('computer')
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
  text-shadow: rgba(255,255,250,.4) 0.1em 0.1em 0.2em
}
html{

  background-image:url('./assets/bg.jpg');
  background-position: center;
}
body{
  box-sizing:border-box;
  -webkit-user-select:none ;
  -moz-user-select: none ;
  -ms-user-select: none ;
  -o-user-select: none ;
  user-select: none ;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

/*  background: rgba(233, 240, 255,0.9);*/
  height:100%;

  font-family: Monaco,Helvetica, monospace, "Lucida Console","Comic Sans MS", sans-serif;
}

.router{
  min-height:100vh;
  animation-duration:.4s;
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

a{
  color:rgb(3, 57, 101);
}

a:hover{
  color:rgba(33,133,201,.5);
};

a:visited{
  color:rgba(3, 57, 101,.5);

};

.choose{
  padding:10px;
}
</style>
