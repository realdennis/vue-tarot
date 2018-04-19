<template>
  <div class="daily">
  	<div class="title">
      <h1>每日運勢</h1>
    </div>
    <div class="result" v-if="draw">
      <flexbox>

        <img :src="path" :style="style">
        <flexbox-item>
          <div class="profile"></div>
          <div class="text">
            <i class="card-mean"> {{ mean }}</i>
            <h5 class="card-name">{{ card }}</h5>
          </div>
        </flexbox-item>
        
      </flexbox>
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
import { Divider, Flexbox, FlexboxItem } from 'vux'
//import  {}  from './draw'
let draw = require('./draw.js')

export default {
  components: {
    Divider, Flexbox, FlexboxItem
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
.result{
  background-color: rgb(255,255,255);
  padding:20px;
  color:black;
  border:solid black;
  border-width:2px;
}

.choose{
  padding:30px;
}
img{
  width:150px;
}
</style>
