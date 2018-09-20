<template>
  <div class="spread">
    <div class="title">
      <h1>{{$t("message.spread")}}</h1>
    </div>

    <div class="choose">
      <p>{{$t("message.spreadChoose")}}</p>
      <div class="link">
        <router-link :to="{name:'result',params:{num:1}}" class="button">1</router-link>
        <router-link :to="{name:'result',params:{num:3}}" class="button">3</router-link>
        <router-link :to="{name:'result',params:{num:5}}" class="button">5</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  .button {
    border: 1px solid black;
    color: black;
    width: 250px;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;
    margin: 20px;
  }
}
</style>
