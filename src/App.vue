<template>
  <div id="app" @click.right="e=>e.preventDefault()">
    <!--<button v-if="pwa" @click="goBack" type="ios-arrow-thin-left" size="50" style="position:fixed;bottom:20;right:20;border:2px solid rgba(0, 0, 0,.5);border-radius:100%;z-index:100;"></button>-->
    <header>{{$t(`message.${this.$route.name}`)}}</header>
    <transition :name="transisitionName">
      <router-view class="router" />
    </transition>
    <footer>
      <footer-navigator />
    </footer>
  </div>
</template>

<script>
import FooterNavigator from '@/components/FooterNavigator';
export default {
  name: 'app',
  components: { FooterNavigator },
  computed: {},
  mounted() {
    this.$root.$i18n.locale = navigator.language || navigator.userLanguage;
  },
  data() {
    return {
      transisitionName: ''
    };
  },
  watch: {
    $route(to, from) {
      (to.name === 'spread' && from.name === 'about') || to.name === 'daily'
        ? (this.transisitionName = 'fade-right')
        : (this.transisitionName = 'fade-left');
      //router change
      //Below scroll not use smooth!
      window.scroll({
        top:0
      })
    }
  }
};
</script>

<style lang="scss">
$duration: 0.2s;
$distance: 10%;
.fade-right-enter-active,
.fade-right-leave-active,
.fade-left-enter-active,
.fade-left-leave-active {
  transition: all $duration ease;
}
.fade-right-enter, .fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d($distance, 0, 0);
}
.fade-left-enter, .fade-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(-$distance, 0, 0);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

.router {
  min-height: 100%;
  //min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}
h1.title,
header {
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  top: env(safe-area-inset-top);
  z-index: 1000;
  background-color: #fff;
  box-shadow: 1px 1px 1px gainsboro;
  //background-color: rgb(45, 53, 73);
  //color: rgb(244, 244, 244);
}

footer {
  background-color: #fff;
  position: fixed;
  height: 40px;
  bottom: 0;
  bottom: env(safe-area-inset-bottom);
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 1px -1px 1px gainsboro;
}

html {
  height: 100%;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
}
body {
  -webkit-tap-highlight-color: transparent;
  overscroll-behavior-y: none;
  background-color: rgb(245, 245, 250);
  height: 100%;
  width: 100%;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}
a {
  color: #033965;
  text-decoration: none;
}
a:visited {
  color: rgba(3, 57, 101, 0.5);
}
a:hover {
  color: rgba(33, 133, 201, 0.5);
}
</style>
