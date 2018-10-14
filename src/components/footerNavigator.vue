<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/" exact class="col">
          <p class="menu-button">{{$t("message.daily")}}</p>
        </router-link>

      </li>
      <li>
        <router-link to="/spread" class="col">
          <p class="menu-button">{{$t("message.spread")}}</p>
        </router-link>

      </li>
      <li>
        <router-link to="/about" class="col">
          <p class="menu-button">{{$t("message.about")}}</p>
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
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
  }
}
</style>
