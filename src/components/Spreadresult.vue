<template>
  <div id="spread-result">
    <transition name="fade-down">
      <div class="draw-wrapper" key=0 v-if="hasDraw">
        <div class="card-set">
          <div v-for="(c,key) in each" class="card" :key="key">
            <span class="flag-name">{{c.flagName}}</span>
            <img class="tarot" :class="{reversed:c.reversed}" :src="c.path" :style="c.style">
            <a :href="gSearchLink(c.cardName)" target="_blank" style="text-align:center; display:flex">
              <span class="card-name"> {{c.cardName}}</span>
            </a>
          </div>
        </div>
        <div class="flex" style="display:flex;flex-direction:wrap;justify-content:center;align-items:center;">
          <font-awesome-icon @click="reset" style="font-size:60px;opacity:.8;color:gray;cursor:pointer; padding:15px;" class="font-awesome" :icon="['fas','redo']" />
          <font-awesome-icon @click="upMethods" style="font-size:60px;opacity:.8;color:gray;cursor:pointer;margin:10px;" class="font-awesome" :icon="['fas','angle-up']" />
        </div>
      </div>
    </transition>
    <div class="choose-button" id="enter" key=1 v-if="!hasDraw">
      <font-awesome-icon @click="tEnd" class="draw-button" :icon="['far','dot-circle']" />
      <h3>{{$t("message.spreadNumber",{number:number})}}</h3>
      <p>{{$t("message.meditation")}}</p>
      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon> -->
    </div>
  </div>
</template>

<script>
//import html2canvas from 'html2canvas';
import { s_result } from '@/lib/draw.js';
export default {
  data() {
    return {
      number: 0,
      time: 0,
      hasDraw: false,
      path: '/static/tarot/',
      each: {}
    };
  },
  props: ['num'],
  computed: {},
  updated() {
    this.initial();
  },
  mounted() {
    this.initial();
  },
  methods: {
    gSearchLink(param) {
      return `https://google.com/search?q=${param}`;
    },
    upMethods() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },
    initial() {
      let num = this.num;
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
    },
    reset() {
      this.each = {};
      this.hasDraw = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 1.5s ease;
}
.fade-down-enter, .fade-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, -50%, 0);
  opacity: 0;
}
.draw-wrapper {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card-set {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      padding: 5px 15px;
      margin:20px;
      background-color: white;
      //box-shadow: 1px 2px rgba(0,0,0,.3);
      border: 1px solid rgba(0,0,0,.2);
      width:200px;
      border-radius: 10px;
      //border: 1px rgba(0, 0, 0, 0.7) solid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img.tarot {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
      img.reversed {
        transform: rotate(180deg);
      }
    }
    .flag-name{
      opacity: 0.6;
      font-weight: bold;
      font-size: 1em;
      padding: 5px;
    }
    .card-name {
      opacity: 0.6;
      font-weight: bold;
      font-size: 1em;
      padding: 5px;
      text-transform: uppercase;
    }
  }
}

.choose-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .draw-button {
    font-size: 100px;
    margin: 10px;
    cursor: pointer;
  }
}
</style>
