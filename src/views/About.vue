<template>
  <div class="about">
    <!--
    <h1 class="title">  {{$t('message.about')}}</h1>
    -->

    <div class="contents-wrapper">
      <div class="profile">
        <img @click="changeLocale" src="../assets/logo.jpg" alt="logo" />
        <h2> {{$t('message.name')}}</h2>
      </div>
      <ul class="info">
        <li>
          <span class="first"> 作者</span>
          <span class="second">realdennis </span>
        </li>
        <li>
          <span class="first">介紹</span>
          <span class="second">
            這是一個突發奇想的side project，透過Vue實作並且開源於
            <a href='https://github.com/realdennis/vue-tarot' target="_blank">
              GitHub
            </a>
          </span>
        </li>

        <li>
          <span class="first">聲明</span>
          <span class="second disclaim">
            {{$t('message.moreDisclaimer')}}
          </span>
        </li>
      </ul>
      <!--
      <div class="wrapper">
        <img class="jojo" src="../assets/jojo.jpg" alt="這是命運的紙牌，塔羅牌！">
        <h3>This is an Open Source Project</h3>
        <a href='https://github.com/realdennis/vue-tarot' target="_blank">
          GitHub
        </a>
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLocale() {
      const list = ['zh-TW', 'zh-CN', 'en'];
      let nowLocale = this.$root.$i18n.locale;

      let nowIndex = list.indexOf(nowLocale);
      let newIndex = (nowIndex + 1) % 3;

      this.$root.$i18n.locale = list[newIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
.contents-wrapper {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: inherit;

  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    img {
      cursor: pointer;
      flex-shrink: 0;
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    h2 {
      text-align: center;
      width: 100%;
      margin: 10px auto;
      font-size: 1.6em;
    }
    //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    //margin-bottom: 10px;
  }
  ul.info {
    width: 100%;
    background-color: white;
    li {
      padding: 10px;

      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      span.first {
        font-size: 1.2em;
        width: 60px;
        margin-right: 10px;
        max-width: 80px;
        text-align: center;
        opacity: 0.6;
      }
      span.second {
        padding: 0 10px;
        font-size: 1em;
        width: 100%;
      }
      span.disclaim {
        font-size: 1em;
      }
    }
  }
  /*
  .wrapper {
    background-color: white;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }
  */
}
</style>
