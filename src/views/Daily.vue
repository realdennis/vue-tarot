<template>
  <div class="daily">
    <transition name="fade-up">
      <div class="result-wrapper" v-if="hasDraw" key=0>
        <div class="result">
          <img class="tarot" :src="cardInfo.path" :class="{reversed:cardInfo.reversed}" :style="cardInfo.style">
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
        <social-sharing :url="url" :title="socialContent" :description="socialContent" :quote="socialContent" hashtags="app,daily,tarot" inline-template>
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
        <div class="draw-time" v-html="$t('message.drawTime',{ month:cardInfo.drawTime.month,date:cardInfo.drawTime.date,hours:cardInfo.drawTime.hours,restHour:restHour })" />
      </div>
    </transition>
    <div class="choose-button" v-if="!hasDraw" key=1>
      <font-awesome-icon @click="drawHandler" class="draw-button" :icon="['far','dot-circle']" />
      <h3>{{$t("message.moreDaily")}}</h3>
      <p>{{$t("message.meditation")}}</p>
    </div>
  </div>
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import { daily } from '@/lib/draw.js';

export default {
  components: {
    SocialSharing
  },
  data() {
    return {
      url:location.origin,
      hasDraw: false,
      cardInfo: {
        drawTime: {
          month: 0,
          date: 0,
          hours: 0
        },
        path: '',
        mean: '',
        cardName: '',
        flagName: '',
        reversed: false
      }
    };
  },
  computed: {
    restHour() {
      return 24 - new Date().getHours();
    },
    gSearchLink() {
      return `https://google.com/search?q=${this.cardInfo.flagName} ${
        this.cardInfo.cardName
      }`;
    },
    socialContent() {
      return `(${this.cardInfo.drawTime.month}/${
        this.cardInfo.drawTime.date
      }) ${this.cardInfo.flagName} ${this.cardInfo.cardName} - "${
        this.cardInfo.mean
      }"`;
    }
  },
  mounted() {
    let local = this.$ls.get('daily', null);
    if (local) this.$nextTick().then(() => this.render(local));
  },
  methods: {
    render(d) {
      //if (d.reversed) this.cardInfo.style = 'transform: rotate(180deg);';
      this.cardInfo = d;
      if (
        this.$root.$i18n.locale === 'zh-TW' ||
        this.$root.$i18n.locale === 'zh-CN'
      ) {
        this.cardInfo.cardName = d.card.tw;
        this.cardInfo.flagName = d.flag.tw;
      } else {
        this.cardInfo.cardName = d.card.en;
        this.cardInfo.flagName = d.flag.en;
      }
      this.hasDraw = true;
    },
    drawHandler() {
      let d = daily();
      let now = new Date();
      d.drawTime = {
        month: now.getMonth() + 1, //會差一個月
        date: now.getDate(),
        hours: now.getHours()
      };
      const expire = () => {
        let h = 24 - now.getHours();
        let m = 60 - now.getMinutes();
        return ((h - 1) * 60 + m) * 60 * 1000; // ms
      };
      this.$ls.set('daily', d, expire()); //a day expire
      this.render(d);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all .8s ease;
}
.fade-up-enter, .fade-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0,100%,0);
  opacity: 0;
}
.daily {
  .choose-button {
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
  .result-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .result {
      max-width: 100%;
      background-color: white;
      padding: 15px;
      color: black;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: stretch;
      img.tarot {
        background-color:rgb(213,206,200);
        max-width:50%;
        max-height:260px;
        object-fit: contain;
      }
      .reversed {
        transform: rotate(180deg);
      }
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
    .social-icon-wrapper {
      font-size: 50px;
      color: gray;
      margin: 10px;
      display: flex;
      width: 50%;
      justify-content: space-around;
    }

    .draw-time {
      margin: 10px;
      font-style: italic;
    }
  }
}
</style>
