<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/" exact class="r-link">
          <!--<p class="menu-button">{{$t("message.daily")}}</p>-->
          <font-awesome-icon class="font-awesome" :icon="['fas','home']" />
        </router-link>

      </li>
      <li>
        <router-link to="/spread" class="r-link">
          <!--<p class="menu-button">{{$t("message.spread")}}</p>-->
          <font-awesome-icon class="font-awesome" :icon="['fas','hand-lizard']" />
        </router-link>

      </li>
      <li>
        <router-link to="/about" class="r-link">
          <!--<p class="menu-button">{{$t("message.about")}}</p>-->
          <font-awesome-icon class="font-awesome" :icon="['fas','info-circle']" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
</script>
<style lang="scss" scoped>
nav.nav {
  ul {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .r-link{
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .font-awesome {
        font-size: 1.6em;
        opacity: 0.8;
      }
    }
  }
}
</style>
