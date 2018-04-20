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
}
</script>

<style>
#app{
	text-align: center
}

.v-leave { opacity: 1; }
.v-leave-active { transition: opacity .3s ;height:100vh;}
.v-leave-to { opacity: 0; }
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity .3s }
.v-enter-to { opacity: 1; }

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
