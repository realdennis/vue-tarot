<template>
  <div class="disclaim">
    <h1 class="title">{{$t("message.disclaimer")}}</h1>
    <div class="contents">
      <div class="wrapper">
        <strong>{{$t("message.name")}}</strong>
        <p v-html="$t('message.moreDisclaimer')"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contents {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrapper{
    background-color:white;
    padding:10px;
    border-radius: 10px;
  }
}
</style>
