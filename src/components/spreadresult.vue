<template>
  <div id="spread-result">
    <h1 class="title">{{$t("message.spread")}}</h1>

    <div class="draw-wrapper" v-if="hasDraw">
      <div v-for="(c,key) in each" class="card" :key="key">
        <img class="tarot" :class="{reversed:c.reversed}" :src="c.path" :style="c.style">
        <a :href="gSearchLink(c.cardName)" target="_blank" style="text-align:center; display:flex">
          <!--
            <h3 style="opacity: .8">{{c.flagName}}</h3>
            <h4 style="opacity: .8" class="card-name">{{c.cardName}}</h4>
            -->
          <span class="card-name">{{c.flagName}} {{c.cardName}}</span>
        </a>
      </div>
      <font-awesome-icon @click="upMethods" style="font-size:60px;opacity:.8;color:gray;cursor:pointer;" class="font-awesome" :icon="['fas','angle-up']" />
    </div>
    <div class="choose-button" id="enter" v-else>
      <font-awesome-icon @click="tEnd" class="draw-button" :icon="['far','dot-circle']" />
      <h3>{{$t("message.spreadNumber",{number:number})}}</h3>
      <p>{{$t("message.meditation")}}</p>
      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon> -->
    </div>
  </div>
</template>

<script>
//import html2canvas from 'html2canvas';
import { s_result } from './draw.js';
export default {
  data() {
    return {
      msg: 'Choose One',
      number: 0,
      time: 0,
      hasDraw: false,
      path: '/static/tarot/',
      each: {},
    };
  },
  computed:{
  },
  updated() {
    this.initial();
  },
  mounted() {
    this.initial();
  },
  methods: {
    gSearchLink(param){
      return `https://google.com/search?q=${param}`
    },
    upMethods() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },
    initial() {
      let num = this.$route.params.num;
      if (num == undefined) return;
      if (num != 1 && num != 3 && num != 5) {
        alert('Not Allow to Access!');
        history.go(-1);
        return;
      }
      this.number = Number(num);
    },
    tEnd() {
      //這邊抽牌！
      let d = s_result(this.number);
      this.each = d;
      for (let i = 0; i < this.number; i++) {
        if (
          this.$root.$i18n.locale === 'zh-TW' ||
          this.$root.$i18n.locale === 'zh-CN'
        ) {
          this.each[i].cardName = d[i].card.tw;
          this.each[i].flagName = d[i].flag.tw;
        } else {
          this.each[i].cardName = d[i].card.en;
          this.each[i].flagName = d[i].flag.en;
        }
      }
      this.hasDraw = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.reversed{
  transform: rotate(180deg);
}
.draw-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.draw-button {
  font-size: 100px;
  margin: 10px;
  cursor: pointer;
}
.choose-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  background: none;
  border: 1px solid black;
  color: black;
  width: 50vw;
  margin: 10px;
  display: flex;
  border-radius: 10px;
  padding: 18px 40px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
}
.card-set {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.card {
  max-width: 100%;
  min-width: 20%;
  margin: 10px 15px;
  padding: 5px 10px;
  //background-color: white;
  border-radius: 10px;
  //border: 1px rgba(0, 0, 0, 0.7) solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 80%;
    height: auto;
    object-fit: contain;
  }
}
.card-name {
  font-style: italic;
  font-size: 1.4em;
  margin-top: 10px;
}
</style>
