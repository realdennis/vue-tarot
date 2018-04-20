<template>
  <div class="disclaim">
  	<div class="title">
      <h1>免責聲明</h1>
    </div>
    <div class="cotents">
      <div>
      <strong>塔羅機器人</strong> 所有圖文均來自國內外所提供的公開引用資源，所有圖文版權均歸原作者及其網站所有。
      <br>
      若原作者對本站的作品版權的歸屬存有異議，請馬上告知。
      </div>
      <br>
      <i>
      其占卜內容僅供參考，本站不承擔任何後續的責任。
      </i>
    </div>
    <divider>Go Back</divider>
    <div id="leave" @click="leaveHandler">
      <x-icon type="ios-arrow-thin-left" size="150"></x-icon>
    </div>
  </div>
</template>

<script>
import {  } from 'vux'

export default {
  components: {
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods:{
    leaveHandler(){
      history.back();
    }
  }
}
</script>

<style scoped>

.cotents{
  text-align: center;
  border:solid gray;

  padding:30px;
}

</style>
