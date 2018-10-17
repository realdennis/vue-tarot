<template>
  <div class="daily">
    <h1 class="title">{{$t("message.daily")}}</h1>
    <div v-if="isDraw" class="result-wrapper">
      <div class="result">
        <img class="tarot" :src="cardInfo.path" :style="cardInfo.style">
        <div class="tarot-text">
          <div class="card-mean">
            <i> {{ cardInfo.mean }}</i>
          </div>
          <a class="card-name" :href="gSearchLink" target="_blank">
            <h6> {{ cardInfo.flagName }}</h6>
            <h4> {{ cardInfo.cardName }}</h4>
          </a>
        </div>
      </div>
      <!--        <x-button @click.native="dailyshot" plain type="default" style="width:50%;margin-top:20px">Screenshot</x-button>-->
      <social-sharing url="https://realdennis.github.io/vue-tarot" :title="socialContent" :description="socialContent" :quote="socialContent" hashtags="app,daily,tarot" inline-template>
        <div class="social-icon-wrapper">
          <network class="network" network="facebook">
            <font-awesome-icon class="social-icon" :icon="['fab','facebook-square']" />
          </network>
          <network class="network" network="line">
            <font-awesome-icon class="social-icon" :icon="['fab','line']" />
          </network>
          <network class="network" network="twitter">
            <font-awesome-icon class="social-icon" :icon="['fab','twitter-square']" />
          </network>
        </div>
      </social-sharing>
      <div class="draw-time">
        <p v-html="$t('message.drawTime',{ month:drawTime.month,date:drawTime.date,hours:drawTime.hours,restHour:restHour })"></p>
      </div>
    </div>
    <div class="choose-button" v-else>
      <font-awesome-icon @click="drawHandler" class="draw-button" :icon="['far','dot-circle']" />
      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>-->
      <h3>{{$t("message.moreDaily")}}</h3>
      <p>{{$t("message.meditation")}}</p>
    </div>
  </div>
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import { daily } from './draw.js';

export default {
  components: {
    SocialSharing
  },
  data() {
    return {
      isDraw: false,
      drawTime: {
        month: Number,
        date: Number,
        hours: Number
      },
      cardInfo: {
        path: String,
        mean: String,
        cardName: String,
        flagName: String,
        style: String
      }
    };
  },
  computed: {
    restHour() {
      return 24 - new Date().getHours();
    },
    gSearchLink() {
      return `https://google.com/search?q=${this.flagName} ${this.cardName}`;
    },
    socialContent() {
      return `(${this.drawTime.month}/${this.drawTime.date}) ${this.flagName} ${
        this.cardInfo.cardName
      } - "${this.cardInfo.mean}"`;
    }
  },
  mounted() {
    let local = this.$ls.get('daily', null);
    if (local) this.render(local);
  },
  methods: {
    render(d) {
      if (d.reversed) this.cardInfo.style = 'transform: rotate(180deg);';
      this.cardInfo.path = d.path;
      this.cardInfo.mean = d.mean;
      if (
        this.$root.$i18n.locale === 'zh-TW' ||
        this.$root.$i18n.locale === 'zh-CN'
      ) {
        this.cardInfo.cardName = d.card.tw;
        this.cardInfo.flagName = d.flag.tw;
      } else {
        this.cardInfo.cardName = d.card.en;
        this.cardInfoflagName = d.flag.en;
      }
      this.drawTime = d.time;
      this.isDraw = true;
    },
    drawHandler() {
      let d = daily();
      let now = new Date();
      d.time = {
        month: now.getMonth() + 1, //會差一個月
        date: now.getDate(),
        hours: now.getHours()
      };
      let h = 24 - now.getHours();
      let m = 60 - now.getMinutes();
      let expireTime = ((h - 1) * 60 + m) * 60 * 1000; // ms
      this.render(d);
      this.$ls.set(
        'daily',
        {
          time: this.drawTime,
          card: d.card,
          flag: d.flag,
          path: d.path,
          reversed: d.reversed,
          mean: d.mean
        },
        expireTime
      ); //a day expire
    }
  }
};
</script>

<style lang="scss" scoped>
.social-icon-wrapper {
  font-size: 50px;
  color: gray;
  margin: 10px;
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.daily {
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
}
.result-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  .result {
    max-width: 100%;
    background-color: white;
    padding: 15px;
    color: black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    .tarot-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0px 20px;
      .card-mean {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .draw-time {
    margin: 10px;
    font-style: italic;
  }
}
</style>
