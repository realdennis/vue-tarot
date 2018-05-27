<template>
  <div class="daily">
  	<div class="title">
      <h1>{{$t("message.daily")}}</h1>
    </div>

    <transition name="zoom">
      <div v-if="draw" style="animation-duration: 2s">
        <div class="result">
          <div  class="flex-result" style="padding:5px;">
          <flexbox style="position:relative;">
            <img class="result-img" :src="path" :style="style">
            <flexbox-item>
              <div class="profile"></div>
              <div class="text">
                <i class="card-mean"> {{ mean }}</i>

                <div style="position:absolute;bottom:0;">
                  <a :href="google+cardName" target="_blank" >

                    <h6 class="card-name"> {{flagName}}</h6>
                    <h4 class="card-name"> {{cardName}}</h4>
                  </a>
                </div>
              </div>
            </flexbox-item>
          </flexbox>
          </div>
        </div>
        <x-button @click.native="dailyshot" plain type="default" style="width:50%;margin-top:20px">Screenshot</x-button>
        <div class="draw-time"> 
        <p v-html="$t('message.drawTime',{ month:time.month,date:time.date,hours:time.hours,restHour:restHour })"></p>
          <br>
        </div>
      </div>
    </transition>


    <div class="choose-button">
        <div  id="enter" v-if="!draw" >

          <h3>{{$t("message.moreDaily")}}</h3>
          <p>{{$t("message.meditation")}}</p>
          <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>
        </div>
    </div> 

  </div>
</template>

<script>
import {  } from 'vux'

import html2canvas from 'html2canvas'
//import  {}  from './draw'
let daily = require('./draw.js').daily

export default {
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
      flag:'',
      cardName:'',
      flagName:'',
      style:'',
      google:'https://google.com/search?q='
    }
  },
  created(){
    let rc = this.$ls.get('daily','nothing')
    if(rc=='nothing') return;
    //console.log(rc)
    this.render(rc);
  },
  methods:{    
    dailyshot(){
      let result = document.querySelector('.result');
      let temp =result.style.backgroundColor;
      result.style.backgroundColor='rgb(230, 180, 173,.4)';
      result.style.transform = 'scale(0.8,0.8)';

      html2canvas(result).then(canvas=>{
          result.style.backgroundColor = temp;

          result.style.transform = '';

          let dataUrl = canvas.toDataURL();
          var link = document.createElement('a');
          let now = new Date;
          link.download =`daily-${now.getMonth()+1}-${now.getDate()}.jpg`;
          link.href = dataUrl;
          link.click();
      })
    },
    render(d){
      if(d.reversed) this.style='transform: scaleY(-1);'
      this.path = d.path;
      this.mean = d.mean;
      if(this.$root.$i18n.locale ==='zh-TW' || this.$root.$i18n.locale==='zh-CN'){
        this.cardName = d.card.tw;
        this.flagName =d.flag.tw;
      }else{
        this.cardName = d.card.en;
        this.flagName = d.flag.en;
      }

      this.time = d.time;
      this.msg="Go Back"
      this.draw = true;

    },
    tStart(e){
      this.startTouchTime = e.timeStamp;
      this.size+=50;
    },
    tEnd(e){
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
          'flag':d.flag,
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
  border-radius:10px;
}

.result-img{
}

.draw-time{
  margin-top:30px;
}

.choose{
  padding:30px;
}


</style>
