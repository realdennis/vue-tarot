<template>
  <div id="app" @click.right="e=>e.preventDefault()">
    <!--<button v-if="pwa" @click="goBack" type="ios-arrow-thin-left" size="50" style="position:fixed;bottom:20;right:20;border:2px solid rgba(0, 0, 0,.5);border-radius:100%;z-index:100;"></button>-->
    <main>
      <router-view class="router"></router-view>
    </main>
    <footer>
      <footer-navigator />
    </footer>
  </div>
</template>

<script>
import footerNavigator from '@/components/footerNavigator';
export default {
  name: 'app',
  components: { footerNavigator },
  computed: {
    /*
    pwa() {
      if (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone
      )
        return true;
      return false;
    }
    */
  },
  mounted() {
    this.$root.$i18n.locale = navigator.language || navigator.userLanguage;
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  min-height: inherit;
  flex: 1;
  padding: 45px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  .router {
    max-width: 100%;
    flex: 1;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

h1.title {
  height: 40px;
  font-size: 18px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  top: env(safe-area-inset-top);
  z-index: 1000;
  background-color: #fff;
  text-align: center;
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

img.tarot {
  height: 260px;
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
