<template>
  <div>
    <div class="home-title">
      <img class="logo" src="../assets/logo.jpg">
      <h1> Tarobot </h1>
      <p>塔羅機器人</p>
    </div>
    <divider>Let's Start From Here</divider>
    <div class="start">
      <x-button link="start" class="button" :gradients="['#FF2719', '#FF61AD']">開始使用</x-button>
      <x-button :link="{name:'result',params:{num:1}}" class="button" :gradients="['#FF2719', '#FF61AD']">直接抽一張</x-button>
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
.home-title{
  padding-top:30px;
  margin-bottom: 20px;
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
