<template>
  <div id="result">
  	<div class="title">
  		<h1>{{$t("message.spread")}}</h1>
  	</div>

    <div>
      <div v-if="draw">
        <h3 >Screenshot</h3>
        <x-button @click.native="domshot(false)" plain type="default" style="width:30%;display:inline-block;">Flat</x-button>
        <x-button @click.native="domshot(true)" plain type="default" style="width:30%;display:inline-block">Stand</x-button>
      </div>
    </div>
    <div class="card-set">
      <transition-group name="bounce" tag="div">
        <div v-for="(c,key) in each" class="card" :key="key" style="animation-duration: 2s; ">
            <h3 style="opacity: .8">{{c.flagName}}</h3>
            <img class="card-img result-img" :src="c.path" :style="c.style">
            <a :href="google+c.cardName" target="_blank">
             <h4 style="opacity: .8" class="card-name">{{c.cardName}}</h4>
            </a>
        </div>
      </transition-group>
    </div>


    <div class="choose-button" id="enter" v-if="!draw" >
      <h3>{{$t("message.spreadNumber",{number:number})}}</h3>
      <p>{{$t("message.meditation")}}</p>
      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>
    </div>


  </div>
</template>

<script>
import {} from 'vux'
import html2canvas from 'html2canvas'

let s_result = require('./draw.js').s_result;
export default {
  components: {
  },
  data () {
    return {
      msg:"Choose One",
      number:0,
      time:0,
      draw:false,
      path:'/static/tarot/',
      each:{},
      google:'https://google.com/search?q='
    }
  },
  updated(){
    this.initial();
  },
  mounted(){
    this.initial();

    if(innerWidth>innerHeight){
      document.getElementById('app').style.width='100vw';
    }

  },
  destroyed(){
    if(innerWidth>innerHeight){
      document.getElementById('app').style.width='50vw';
    }
  },
  methods:{
    domshot(pure){
        let imageWidth , imageHeight=370;
        switch(this.number){
          case 1:
            imageWidth = 600;
            break;
          case 3:
            imageWidth = 900;
            break;
          case 5:
            imageWidth = 1200;
            break;
          default:
            imageWidth = 1200;
            break;
        }

        let cardSet = document.querySelector('.card-set')


        document.querySelectorAll('.card').forEach(node=>{
          node.style.animationDuration = '0s';
          //禁用動畫
        });
        if(!pure){
          cardSet.style.width=(imageWidth)+'px';
          cardSet.style.height=(imageHeight)+'px';
        }
        cardSet.style.backgroundColor='rgb(230, 180, 173,.4)';
        cardSet.style.transform = 'scale(0.8,0.8)';
        cardSet.style.webkitTransform = 'scale(0.8,0.8)';
        cardSet.style.MozTransform = 'scale(0.8,0.8)';

        cardSet.style.borderRadius = "10px";

      html2canvas(cardSet,{logging:false}).then(canvas=>{
        cardSet.style.width = '';
        cardSet.style.height= '';
        cardSet.style.borderRadius = '';
        cardSet.style.transform = '';
        cardSet.style.webkitTransform = '';
        cardSet.style.MozTransform = '';
      

        cardSet.style.backgroundColor='';
        let dataUrl = canvas.toDataURL();
        var link = document.createElement('a');
        link.href = dataUrl;
        let timestamp = Date.now()
        link.download = `${timestamp}.jpg`
        link.click();
      })
    },
    initial(){  
      let num = this.$route.params.num;
      if(num==undefined) return;
      if(num!=1 && num!=3 && num!=5){
        alert("Not Allow to Access!")
        history.go(-1);
        return
      }
      this.number = Number(num);
    },
    tEnd(e){
      let touchTime = (e.timeStamp-this.time)/1000;

      //if(touchTime<2) return
      //console.log(touchTime);
      //if(touchTime<1) return;
      //這邊抽牌！
      let d = s_result(this.number);
      for(let i=0;i<this.number;i++){
        this.each[i] = {};
        if(d[i].reversed) this.each[i].style='transform: scaleY(-1);'
        this.each[i].path = d[i].path;
        this.each[i].card = d[i].card;
        this.each[i].flag = d[i].flag;
        if(this.$root.$i18n.locale ==='zh-TW' || this.$root.$i18n.locale==='zh-CN'){
          this.each[i].cardName = d[i].card.tw;
          this.each[i].flagName = d[i].flag.tw;
        }else{
          this.each[i].cardName = d[i].card.en;
          this.each[i].flagName = d[i].flag.en;
        }



        
        if(this.$root.$i18n.locale ==='zh-TW' || this.$root.$i18n.locale==='zh-CN'){
          this.each[i].card= d[i].cardTw;
        }else{
          this.each[i].card= d[i].cardEn;
        }
      }
      this.draw=true;

    }
  }
}
</script>

<style scoped>
.card{
  margin: 10px 15px;
  display:inline-block;
  box-sizing: border-box;
  width:200px;
  height:350px;
  padding-top:10px;
  vertical-align: middle;
  
  background-color:rgba(255,255,255,.6);

  border-radius:10px;
  border:1px rgba(0,0,0,.7) solid;
}

.card-img{
}


</style>
