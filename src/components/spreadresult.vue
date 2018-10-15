<template>
  <div id="result">
    <h1 class="title">{{$t("message.spread")}}</h1>

    <!--
    <div style="text-align: center">
      <div v-if="draw">
        <h3>Screenshot</h3>
        <div class="button-wrapper" style="display:flex;justify-content:center;align-items:center; flex-wrap:wrap;">
          <button @click.native="domshot(false)">Flat</button>
          <button @click.native="domshot(true)" >Stand</button>

        </div>
      </div>
    </div>
    -->

    <div class="choose-button" id="enter" v-if="!draw">

      <font-awesome-icon @click="tEnd" class="draw-button" :icon="['far','dot-circle']" />
      <h3>{{$t("message.spreadNumber",{number:number})}}</h3>
      <p>{{$t("message.meditation")}}</p>

      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon> -->
    </div>

    <div>
      <transition-group name="bounce" class="card-set" tag="div">
        <div v-for="(c,key) in each" class="card" :key="key" style="animation-duration: 2s; ">

          <img class="tarot card-img result-img" :src="c.path" :style="c.style">
          <a :href="google+c.cardName" target="_blank" style="text-align:center; display:flex">
            <!--
            <h3 style="opacity: .8">{{c.flagName}}</h3>
            <h4 style="opacity: .8" class="card-name">{{c.cardName}}</h4>
            -->
            <span class="card-name">{{c.flagName}} {{c.cardName}}</span>
          </a>
        </div>
      </transition-group>
    </div>
    <font-awesome-icon @click="upMethods" v-if="draw" style="font-size:60px;opacity:.8;color:gray;cursor:pointer;" class="font-awesome" :icon="['fas','angle-up']" />

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
      draw: false,
      path: '/static/tarot/',
      each: {},
      google: 'https://google.com/search?q='
    };
  },
  updated() {
    this.initial();
  },
  mounted() {
    this.initial();
  },
  methods: {
    upMethods() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },
    domshot(pure) {
      let imageWidth,
        imageHeight = 370;
      switch (this.number) {
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

      let cardSet = document.querySelector('.card-set');

      document.querySelectorAll('.card').forEach(node => {
        node.style.animationDuration = '0s';
        //禁用動畫
      });
      if (!pure) {
        cardSet.style.width = imageWidth + 'px';
        cardSet.style.height = imageHeight + 'px';
      }
      cardSet.style.backgroundColor = 'rgb(230, 180, 173,.4)';
      cardSet.style.transform = 'scale(0.8,0.8)';
      cardSet.style.webkitTransform = 'scale(0.8,0.8)';
      cardSet.style.MozTransform = 'scale(0.8,0.8)';

      cardSet.style.borderRadius = '10px';
      /*
      html2canvas(cardSet, { logging: false }).then(canvas => {
        cardSet.style.width = '';
        cardSet.style.height = '';
        cardSet.style.borderRadius = '';
        cardSet.style.transform = '';
        cardSet.style.webkitTransform = '';
        cardSet.style.MozTransform = '';

        cardSet.style.backgroundColor = '';
        let dataUrl = canvas.toDataURL();
        var link = document.createElement('a');
        link.href = dataUrl;
        let timestamp = Date.now();
        link.download = `${timestamp}.jpg`;
        link.click();
      });
      */
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
      //let touchTime = (e.timeStamp - this.time) / 1000;

      //if(touchTime<2) return
      //console.log(touchTime);
      //if(touchTime<1) return;
      //這邊抽牌！
      let d = s_result(this.number);
      for (let i = 0; i < this.number; i++) {
        this.each[i] = {};
        if (d[i].reversed) this.each[i].style = 'transform: scaleY(-1);';
        this.each[i].path = d[i].path;
        this.each[i].card = d[i].card;
        this.each[i].flag = d[i].flag;
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

        if (
          this.$root.$i18n.locale === 'zh-TW' ||
          this.$root.$i18n.locale === 'zh-CN'
        ) {
          this.each[i].card = d[i].cardTw;
        } else {
          this.each[i].card = d[i].cardEn;
        }
      }
      this.draw = true;
    }
  }
};
</script>

<style lang="scss" scoped>
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
  width:100%;
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
