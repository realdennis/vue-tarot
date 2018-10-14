<template>
  <div class="daily">
    <h1 class="title">{{$t("message.daily")}}</h1>

    <transition name="zoom">
      <div v-if="draw" class="r-animation" style="animation-duration: 2s">
        <div class="draw-time">
          <p v-html="$t('message.drawTime',{ month:time.month,date:time.date,hours:time.hours,restHour:restHour })"></p>
        </div>
        <div class="result">
          <div class="flex-result" style="padding:5px;">
            <div style="display:flex;">
              <img class="tarot" style="flex-shrink:0;" :src="path" :style="style">
              <div style="display:flex;flex-direction:column;justify-content:space-between; margin:0 20px;">
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
      </div>
    </transition>

    <div class="choose-button" v-if="!draw">

      <h3>{{$t("message.moreDaily")}}</h3>
      <p>{{$t("message.meditation")}}</p>

      <font-awesome-icon @click="tEnd" class="draw-button" :icon="['far','dot-circle']" />
      <!--      <x-icon @click="tEnd" type="ios-circle-filled" size="150"></x-icon>-->
    </div>

  </div>
</template>

<script>
import html2canvas from 'html2canvas';
let daily = require('./draw.js').daily;

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
  created() {
    let rc = this.$ls.get('daily', 'nothing');
    if (rc == 'nothing') return;
    //console.log(rc)
    this.render(rc);
  },
  methods: {
    dailyshot() {
      let result = document.querySelector('.result');
      let temp = result.style.backgroundColor;

      document.querySelector('.r-animation').style.animationDuration = '0s';

      result.style.backgroundColor = 'rgb(230, 180, 173,.4)';
      /*
      result.style.transform = 'scale(0.8,0.8)';
      result.style.webkitTransform = 'scale(0.8,0.8)';
      result.style.MozTransform = 'scale(0.8,0.8)';
      */
      html2canvas(result).then(canvas => {
        result.style.backgroundColor = temp;

        /*
          result.style.transform = '';
          result.style.webkitTransform = '';
          result.style.MozTransform = '';
          */
        let dataUrl = canvas.toDataURL();
        var link = document.createElement('a');
        let now = new Date();
        link.download = `daily-${now.getMonth() + 1}-${now.getDate()}.jpg`;
        link.href = dataUrl;
        link.click();
      });
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
    tEnd(e) {
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
.draw-button{
  font-size:100px;
  margin:10px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.result {
  background-color: white;
  padding: 20px 15px;
  color: black;
  border-radius: 10px;
}
.draw-time {
  margin-bottom: 15px;
  font-style: italic;
}

.choose {
  padding: 30px;
}
</style>
