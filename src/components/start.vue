<template>
  <div>
  	<div class="title">
  		<h1>主選單</h1>	
  	</div>
	  <br>
  	<div class="choose" v-show="true">
					<x-button link="daily" class="button" :gradients="['#1D62F0', '#19D5FD']">每日運勢</x-button>
					<x-button link="spread" class="button" :gradients="['#1D62F0', '#19D5FD']">抽牌機！</x-button>
					<x-button link="about" class="button" :gradients="['#1D62F0', '#19D5FD']">關於我們</x-button>
					<x-button link="disclaimer" class="button" :gradients="['#1D62F0', '#19D5FD']">免責聲明</x-button>
  	</div>
  </div>
</template>

<script>
import { XButton,Flexbox,FlexboxItem } from 'vux'

export default {
  components: {
    XButton,
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>

</style>
