<template>
  <div class="spread">
  	<div class="title">
  		<h1>抽牌機</h1>
  	</div>

    <div class="choose">
      <div>
        <p>請選擇要抽幾張牌</p>
        <x-button plain type="default" class="button" :link="{name:'result',params:{num:1}}">1</x-button>
        <x-button plain type="default" class="button" :link="{name:'result',params:{num:3}}">3</x-button>
        <x-button plain type="default" class="button" :link="{name:'result',params:{num:5}}">5</x-button>  
      </div>

      <divider>{{msg}}</divider>
      <div id="leave" @click="leaveHandler">
        <x-icon type="ios-arrow-thin-left" size="150"></x-icon>
      </div>
    </div> 

  </div>
</template>

<script>
import { } from 'vux'

export default {
  components: {
  },
  data () {
    return {
      msg:"others"
    }
  },
  methods:{
    leaveHandler(){
      history.back();
    },
  }
}
</script>

<style scoped>


</style>
