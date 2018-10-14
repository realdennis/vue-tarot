<template>
  <div class="about">
    <h1 class="title">關於我們</h1>

    <div class="contents">
      <div class="wrapper">

        <img class="jojo" src="../assets/jojo.jpg" alt="這是命運的紙牌，塔羅牌！">
        <h3>This is an Open Source Project</h3>
        <a href='https://github.com/realdennis/vue-tarot' target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.jojo {
  width: 220px;
}
.contents {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrapper {
    background-color: white;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
