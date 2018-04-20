<template>
  <div class="result">
  	<div class="title">
  		<h1>抽牌機！</h1>
  	</div>
    <div class="result" v-if="draw">
        <div v-for="c in each" class="card">
            <divider>Tarot</divider>
            <h3 class="card-name">{{c.card}}</h3>
            <img class="card-img" :src="c.path" :style="c.style">
        </div>

    </div>
    <div class="choose">
      <div  id="enter" v-if="!draw">
        <h2>您想要抽 {{ number }} 張牌...</h2>
        <p>請冥想並按住按鈕...</p>
        <x-icon @mousedown="tStart" @mouseup="tEnd" @touchstart="tStart" @touchend="tEnd" type="ios-circle-filled" size="150"></x-icon>
      </div>
      <divider>{{msg}}</divider>
      <div id="leave" @click="leaveHandler">
        <x-icon type="ios-arrow-thin-left" size="150"></x-icon>
      </div>
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
      each:{}
    }
  },
  updated(){
    this.initial();
  },
  mounted(){
    this.initial();
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
        this.each[i].path = "/static/tarot/"+d[i].fileName;
        this.each[i].card = d[i].card;
      }
      this.draw=true
    }
  }
}
</script>

<style scoped>
.result{
}
.card{
}
.r-card{


}

</style>
