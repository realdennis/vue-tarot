<template>
  <div class="result">
  	<div class="title">
  		<h1>抽牌機！</h1>
      <h2>您想要抽 {{ $route.params.num }} 張牌...</h2>
  	</div>

    <div class="choose">
      <div  id="enter" v-if="!draw">
        <p>請冥想並按住按鈕...</p>
        <x-icon @mousedown="tStart" @mouseup="tEnd" @touchstart="tStart" @touchend="tEnd" type="ios-circle-filled" size="150"></x-icon>
      </div>
      <divider>Choose one</divider>
      <div id="leave" @click="leaveHandler">
        <x-icon type="ios-arrow-thin-left" size="150"></x-icon>
      </div>
    </div> 
  </div>
</template>

<script>
import { Divider } from 'vux'

let draw = require('./draw.js')
export default {
  components: {
    Divider
  },
  data () {
    return {
      time:0,
      draw:false,
      path:'/static/tarot/',
      mean:'',
      card:'',
      style:'',
    }
  },
  mounted(){
    let num = this.$route.params.num;
    if(num!=1 && num!=3 && num!=5){
      console.log("Not Allow to Access!")
      return
    }
    console.log("congratulations")
  },
  methods:{
    leaveHandler(){
      history.back();
    },
    tStart(e){
      this.time = e.timeStamp;
      this.size+=50;
      console.log('hi')
    },
    tEnd(e){
      let touchTime = (e.timeStamp-this.time)/1000;
      console.log(touchTime);
      //if(touchTime<1) return;
      //這邊抽牌！

      let d = draw();
      console.log(d)
      if(d.reversed) this.style=' transform: scaleY(-1);'
      this.path += d.fileName;
      this.mean = d.mean;
      this.card = d.card;
      this.draw = true;
    }
  }
}
</script>

<style scoped>

</style>
