<template>
  <div>
    <div class="title">
      <h1>關於我們</h1>

      <div class="contents">
        <img src="/static/JOJO2.png">
        <br>
        <i>「無馱無馱無馱無馱無馱無馱無馱無馱無馱無馱」 - 迪奧·布蘭度</i>
        <br>
        <h3>這個開發者很懶...<br>不打算自我介紹...</h3>
      </div>
    </div>
    <divider>Back</divider>
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
.start {
	text-align: center;
	margin-top: 20vh;
  margin-bottom: 10px;
}
.choose{
	margin:20px;
}
img{
  width:250px;
}
.contents{
  text-align: center; 
  padding-top:10px;
  border:solid black; 
}

</style>
