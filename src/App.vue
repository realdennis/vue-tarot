<template>
  <div id="app" @click.right="e=>{e.preventDefault()}">
  	<transition name="fade">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
	text-align: center
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.button {
  font-size: 25px !important;
  border-radius: 150px !important;
  height:70px;
}

.title {
	text-align: center;
  margin-top:10vh;
  margin-bottom: 10px;
  text-align: center;
}

body{
	user-select : none;
	background: rgba(233, 240, 255,0.9);	
}

</style>
