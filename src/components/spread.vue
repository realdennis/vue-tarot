<template>
  <div class="spread">
    <!--
    <h1 class="title">{{$t("message.spread")}}</h1>
    -->
    <div class="choose">
      <div class="link">
        <router-link to="/result/1" class="button">1</router-link>
        <router-link to="/result/3" class="button">3</router-link>
        <router-link to="/result/5" class="button">5</router-link>
      </div>
      <p>{{$t("message.spreadChoose")}}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choose {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    .button {
      text-align: center;
      background-color: rgba(10, 10, 10, 0.8);
      color: white;
      &:hover {
        opacity: 0.3;
      }
      width: 250px;
      border-radius: 10px;
      padding: 20px 40px;
      font-size: 20px;
      margin: 20px;
      @media (max-width: 900px) {
        & {
          width: 100%;
        }
      }
    }
  }
}
</style>
