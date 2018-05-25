<template>
  <div class="daily">
  	<div class="title">
      <h1>每日運勢</h1>
    </div>

    <transition name="zoom">
      <div v-if="draw" style="animation-duration: 2s">
        <div class="result">
          <flexbox>
            <img class="result-img" :src="path" :style="style">
            <flexbox-item>
              <div class="profile"></div>
              <div class="text">
                <i class="card-mean"> {{ mean }}</i>

                <a :href="google+card" target="_blank" >
                  <h5 class="card-name">{{ card }}</h5>
                </a>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="draw-time"> 
          <p>上次抽牌於{{time.month}}月{{time.date}}號 {{time.hours}}點</p>
          
          <p><i>於{{restHour}}小時後重置</i></p>
          <br>
        </div>
      </div>
    </transition>


    <div class="choose-button">
        <div  id="enter" v-if="!draw" >

          <h3>一天僅限一次，於每晚12點重置</h3>
          <p>請冥想並按下按鈕...</p>
          <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>
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
      restHour:24-(new Date).getHours(),
      msg:"Choose one",
      startTouchTime:0,
      draw:false,
      path:'',
      mean:'',
      card:'',
      style:'',
      google:'https://google.com/search?q='
    }
  },
  mounted(){
    },
  computed:{
  },
  created(){
    let rc = this.$ls.get('daily','nothing')
    if(rc=='nothing') return;
    console.log(rc)
    this.render(rc);
  },
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
      let h = (24 - now.getHours())
      let m = (60- now.getMinutes())

      let restTime = ((h-1)*60 + m)*60 *1000; // ms

      this.render(d);
      this.$ls.set(
        'daily',{
          'time':this.time,
          'card':d.card,
          'path':d.path,
          'reversed':d.reversed,
          'mean':d.mean
        },restTime);//a day expire
    }
  }
}
</script>

<style scoped>
.result{

  background-color: rgba(255,255,250,.4);
  padding:20px 15px;
  color:black;
  border:solid black;
  border-width:1px;

  margin:10px;
  margin-bottom:50px;
  margin-bottom:50px;
  border-radius:10px;
}

.result-img{
}

.draw-time{
}

.choose{
  padding:30px;
}


</style>
