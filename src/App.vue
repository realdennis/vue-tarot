<template>
  <div id="app" @click.right="e=>{e.preventDefault()}">
    <x-icon @click="goBack" type="ios-arrow-thin-left" size="50" style="position:fixed;bottom:20;right:20;border:1px solid rgba(0, 0, 0,.5);border-radius:100%;z-index:100"></x-icon>

  	<transition name="v">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    if(innerWidth>innerHeight){
      console.log('computer')
      document.getElementById('app').style.width="50vh";
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

<style>
#app{
	text-align: center;
  margin:0px auto;
}

.v-leave { opacity: 1; }
.v-leave-active { transition: opacity .6s ;height:100vh;}
.v-leave-to { opacity: 0; }
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity .6s }
.v-enter-to { opacity: 1; }



.v2-leave { opacity: 1; }
.v2-leave-active { transition: opacity 2s ;height:100vh;}
.v2-leave-to { opacity: 0; }
.v2-enter { opacity: 0; }
.v2-enter-active  { transition: opacity 2s }
.v2-enter-to { opacity: 1; }

.button {
  border-radius: 150px !important;
  margin:1em 0;
}


.title {
	text-align: center;
  margin-bottom: 50px;
  text-align: center;
}

body{
	-webkit-user-select:none ;
  -moz-user-select: none ;
  -ms-user-select: none ;
  -o-user-select: none ;
  user-select: none ;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background: rgba(233, 240, 255,0.9);	
}

img{
  width:150px;
}
</style>
