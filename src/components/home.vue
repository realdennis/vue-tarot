<template>
  <div>
    <div class="title">
      <img class="logo" src="../assets/tarot_logo.jpg">
      <transition enter-active-class="animated wobble" leave-active-class="animated wobble">
        <h1> 塔羅機器人 </h1>
      </transition>
    </div>
    <divider>Let's Start From Here</divider>
    <div class="start">
      <x-button link="start" class="button" :gradients="['#FF2719', '#FF61AD']">開始使用</x-button>
    </div>
  </div>
</template>

<script>
import { XButton,Divider } from 'vux'

export default {
  components: {
    XButton,Divider
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>

@import  '../node_modules/animate.css/animate.css'

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.logo {
  border-radius: 99px;
  width: 150px;
  height: 150px
}

.start {
  margin:40px;
}
</style>
