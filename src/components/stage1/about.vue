<template>
  <div>
    <div class="title">
      <h1>關於我們</h1>

      <div class="contents">
        <img class="JOJO2" :src="path">
        <br>
        <i>「無馱無馱無馱無馱無馱無馱無馱無馱無馱無馱」 - 迪奧·布蘭度</i>
        <br>
        <h3>This is an Open Source Project</h3>
        <a href='https://github.com/realdennis/vue-tarot'>
                <img class="github" :src="gPath" alt=""><br>Github</a>  
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
      gPath:'./static/github.jpg',
      path:'./static/JOJO2.jpg',
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
.JOJO2{
  width:250px;
}
.github{
  width:40px;
}
.contents{
  background-color: white;
  text-align: center; 
  padding-top:10px;
  border:solid black; 
}

</style>
