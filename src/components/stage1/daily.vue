<template>
  <div class="daily">
  	<div class="title">
      <h1>每日運勢</h1>
    </div>

    <transition name="v2">
    <div v-if="draw">
      <div class="result">
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
      <i class="draw-time">上次抽牌於{{time.month}}月{{time.date}}號 {{time.hours}}點...</i>
    </div>

    </transition>


    <div class="choose">
      <div  id="enter" v-if="!draw">
        <p>請冥想並按下按鈕...</p>
        <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>
      </div>
      <divider>{{msg}}</divider>
      <div id="leave" @click="leaveHandler">
        <x-icon type="ios-arrow-thin-left" size="150"></x-icon>
      </div>
    </div> 

  </div>
</template>

<script>
import {  } from 'vux'
//import  {}  from './draw'
let daily = require('./draw.js').daily

export default {
  components: {
    
  },
  data () {
    return {
      time:{
        month:Number,
        date:Number,
        hours:Number,
      },
      msg:"Choose one",
      startTouchTime:0,
      draw:false,
      path:'',
      mean:'',
      card:'',
      style:'',
    }
  },
  created(){
    let rc = this.$ls.get('daily','nothing')
    if(rc=='nothing') return;
    console.log(rc)
    this.render(rc);
  }
  ,
  methods:{
    leaveHandler(){
      history.back();
    },
    render(d){

      if(d.reversed) this.style='transform: scaleY(-1);'
      this.path = d.path;
      this.mean = d.mean;
      this.card = d.card;
      this.time = d.time;
      this.msg="Go Back"
      this.draw = true;
    },
    tStart(e){
      this.startTouchTime = e.timeStamp;
      this.size+=50;
    },
    tEnd(e){
      let touchtime = (e.timeStamp-this.startTouchTime)/1000;
      //if(touchTime<1) return
      let d = daily();
      let now = new Date;
      d.time = {
            'month':now.getMonth()+1,//會差一個月
            'date':now.getDate(),
            'hours':now.getHours()
      };
//      console.log(d)
      this.render(d);
      this.$ls.set(
        'daily',{
          'time':this.time,
          'card':d.card,
          'path':d.path,
          'reversed':d.reversed,
          'mean':d.mean
        },24*60*60*1000);//a day expire
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

.draw-time{
}

.choose{
  padding:30px;
}


</style>
