<template>
  <div class="daily">
    <h1 class="title">{{$t("message.daily")}}</h1>

    <transition name="zoom">
      <div v-if="draw" class="r-animation" style="animation-duration: 2s">
        <div class="result">
          <div class="flex-result" style="padding:5px;">
            <div style="display:flex;">
              <img class="tarot" style="flex-shrink:0;" :src="path" :style="style">
              <div style="display:flex;flex-direction:column;justify-content:space-between; margin:10px 20px;">
                <div style="height:100%;display:flex;flex-direction:column;justify-content:center;">
                  <i class="card-mean"> {{ mean }}</i>
                </div>

                <div>
                  <a :href="google+cardName" target="_blank">

                    <h6 class="card-name"> {{flagName}}</h6>
                    <h4 class="card-name"> {{cardName}}</h4>
                  </a>
                </div>
              </div>
            </div>
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
          <p v-html="$t('message.drawTime',{ month:time.month,date:time.date,hours:time.hours,restHour:restHour })"></p>
        </div>

      </div>
    </transition>

    <div class="choose-button" v-if="!draw">

      <font-awesome-icon @click="tEnd" class="draw-button" :icon="['far','dot-circle']" />
      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>-->
      <h3>{{$t("message.moreDaily")}}</h3>
      <p>{{$t("message.meditation")}}</p>

    </div>

  </div>
</template>

<script>
import SocialSharing from 'vue-social-sharing';
//import html2canvas from 'html2canvas';
import { daily } from './draw.js';

export default {
  data() {
    return {
      time: {
        month: Number,
        date: Number,
        hours: Number
      },
      restHour: 24 - new Date().getHours(),
      msg: 'Choose one',
      startTouchTime: 0,
      draw: false,
      path: '',
      mean: '',
      card: '',
      flag: '',
      cardName: '',
      flagName: '',
      style: '',
      google: 'https://google.com/search?q='
    };
  },
  components: {
    SocialSharing
  },
  computed: {
    socialContent() {
      return `(${this.time.month}/${this.time.date}) ${this.flagName} ${
        this.cardName
      } - "${this.mean}"`;
    }
  },
  created() {
    let rc = this.$ls.get('daily', 'nothing');
    if (rc == 'nothing') return;
    //console.log(rc)
    this.render(rc);
  },
  mounted() {
    //For Twitter
  },
  methods: {
    twitterHook() {
      window.twttr = (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      })(document, 'script', 'twitter-wjs');
    },
    dailyshot() {
      let result = document.querySelector('.result');
      //let temp = result.style.backgroundColor;

      document.querySelector('.r-animation').style.animationDuration = '0s';

      result.style.backgroundColor = 'rgb(230, 180, 173,.4)';
      /*
      result.style.transform = 'scale(0.8,0.8)';
      result.style.webkitTransform = 'scale(0.8,0.8)';
      result.style.MozTransform = 'scale(0.8,0.8)';
      */

      /*
      html2canvas(result).then(canvas => {
        result.style.backgroundColor = temp;
        let dataUrl = canvas.toDataURL();
        var link = document.createElement('a');
        let now = new Date();
        link.download = `daily-${now.getMonth() + 1}-${now.getDate()}.jpg`;
        link.href = dataUrl;
        link.click();
      });
      */
    },
    render(d) {
      if (d.reversed) this.style = 'transform: scaleY(-1);';
      this.path = d.path;
      this.mean = d.mean;
      if (
        this.$root.$i18n.locale === 'zh-TW' ||
        this.$root.$i18n.locale === 'zh-CN'
      ) {
        this.cardName = d.card.tw;
        this.flagName = d.flag.tw;
      } else {
        this.cardName = d.card.en;
        this.flagName = d.flag.en;
      }

      this.time = d.time;
      this.msg = 'Go Back';
      this.draw = true;
    },
    tStart(e) {
      this.startTouchTime = e.timeStamp;
      this.size += 50;
    },
    tEnd() {
      let d = daily();
      let now = new Date();
      d.time = {
        month: now.getMonth() + 1, //會差一個月
        date: now.getDate(),
        hours: now.getHours()
      };
      let h = 24 - now.getHours();
      let m = 60 - now.getMinutes();

      let restTime = ((h - 1) * 60 + m) * 60 * 1000; // ms

      this.render(d);
      this.$ls.set(
        'daily',
        {
          time: this.time,
          card: d.card,
          flag: d.flag,
          path: d.path,
          reversed: d.reversed,
          mean: d.mean
        },
        restTime
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
  display:flex;
  width:50%;
  justify-content: space-around;
}
.draw-button {
  font-size: 100px;
  margin: 10px;
  cursor: pointer;
}
.daily {
  .choose-button {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.r-animation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.result {
  max-width: 100%;
  background-color: white;
  padding: 15px;
  color: black;
  border-radius: 10px;
}
.draw-time {
  margin: 10px;
  font-style: italic;
}

.choose {
  padding: 30px;
}
</style>
