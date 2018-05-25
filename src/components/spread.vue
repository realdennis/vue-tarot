<template>
  <div class="spread">
  	<div class="title">
  		<h1>抽牌機</h1>
  	</div>

    <div class="choose">
      <p>請選擇要抽幾張牌</p>
      <x-button plain type="default" class="button" :link="{name:'result',params:{num:1}}">1</x-button>
      <x-button plain type="default" class="button" :link="{name:'result',params:{num:3}}">3</x-button>
      <x-button plain type="default" class="button" :link="{name:'result',params:{num:5}}">5</x-button>  


    </div> 

  </div>
</template>

<script>

export default {
}
</script>

<style scoped>


</style>
