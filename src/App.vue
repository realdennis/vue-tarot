<template>
  <div id="app" @click.right="e=>{e.preventDefault()}">
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
  font-size: 20px !important;
  border-radius: 150px !important;
  height:50px;
}

.title {
	text-align: center;
  margin-bottom: 10px;
  text-align: center;
}

body{
	user-select : none;
	background: rgba(233, 240, 255,0.9);	
}

img{
  width:150px;
}
</style>
