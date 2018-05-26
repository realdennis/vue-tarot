<template>
  <div class="disclaim">
  	<div class="title">
      <h1>{{$t("message.disclaimer")}}</h1>
    </div>
    <div class="cotents">
      <strong>{{$t("message.name")}}</strong>
      <p v-html="$t('message.moreDisclaimer')"></p>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.cotents{
  text-align: center;
  
  background-color: rgba(255,255,250,.4);
  border:solid rgba(0,0,0,.7) 1px;
  border-radius:10px;

  padding:30px;
  margin:20px;
}

</style>
