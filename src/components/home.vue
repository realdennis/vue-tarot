<template>
  <div>
    <div class="title">
      <img class="logo" src="../assets/tarot_logo.jpg">
      <h1> 塔羅機器人 </h1>
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
      msg: ''
    }
  }
}
</script>

<style scoped>

.logo {
  border-radius: 99px;
  width: 150px;
  height: 150px
}
.start {
  margin:40px;
}
</style>
