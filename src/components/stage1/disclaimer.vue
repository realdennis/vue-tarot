<template>
  <div class="disclaim">
  	<div class="title">
      <h1>免責聲明</h1>
    </div>
    <div class="cotents">
      <p>
      塔羅機器人所有圖文均來自國內外所提供的公開引用資源，所有圖文版權均歸原作者及其網站所有。<br><br>
      本站將竭盡所能註明資源來源，但由於互聯網轉載的不可預測性，無法確認所有內容的版權所有人。<br><br>
      若原作者對本站的作品版權的歸屬存有異議，請馬上告知。
      </p>
      <br>
      <i>
      您可能從這些圖片上獲得資源，塔羅機器人 對其合法性概不負責，亦不承擔任何法律責任。
      其占卜內容僅供參考，本站不承擔任何後續的責任，如有需要請聯繫以上信箱。
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
  background-color:white;
  text-align: center;
  border:solid gray;

  padding:10px;
}

</style>
