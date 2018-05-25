<template>
  <div id="result">
  	<div class="title">
  		<h1>抽牌機</h1>
  	</div>

    <div>
      <transition-group name="bounce" tag="div">
        <div v-for="(c,key) in each" class="card" :key="key" style="animation-duration: 2s; ">
            <img class="card-img" :src="c.path" :style="c.style">
            <a :href="google+c.card" target="_blank">
            <h3 class="card-name">{{c.card}}</h3>
            </a>
        </div>
      </transition-group>
    </div>

    <div class="choose-button" id="enter" v-if="!draw" >
      <h3>您想要抽 {{ number }} 張牌</h3>
      <p>請冥想並按下按鈕...</p>
      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>
    </div>


  </div>
</template>

<script>
import {} from 'vux'


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
      mean:'',
      card:'',
      style:'',
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
    initial(){  
      let num = this.$route.params.num;
      if(num==undefined) return;
      if(num!=1 && num!=3 && num!=5){
        alert("Not Allow to Access!")
        history.go(-1);
        return
      }
      this.number = num;
    },
    leaveHandler(){
      history.back();
    },
    tStart(e){
      this.time = e.timeStamp;
      this.size+=50;
    },
    tEnd(e){
      let touchTime = (e.timeStamp-this.time)/1000;

      if(touchTime<2) return

      this.msg="Go Back"
      console.log(touchTime);
      //if(touchTime<1) return;
      //這邊抽牌！
      let d = s_result(this.number);
      for(let i=0;i<this.number;i++){
        this.each[i] = {};
        if(d[i].reversed) this.each[i].style='transform: scaleY(-1);'
        this.each[i].path = d[i].path;
        this.each[i].card = d[i].card;
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
  background-color:rgba(255,255,255,.6);

  padding:20px 20px 5px 20px;
  border-radius:10px;
  border:1px rgba(0,0,0,.7) solid;
}

.card-img{
}

</style>
