<template>
  <div>
  	<div class="title">
  		<h1>主選單</h1>	
  	</div>
  	<div class="choose" v-show="true">
					<x-button link="daily" class="menu-button">每日運勢</x-button>
					<x-button link="spread" class="menu-button">抽牌機！</x-button>
					<x-button link="about" class="menu-button">關於我們</x-button>
					<x-button link="disclaimer" class="menu-button" >免責聲明</x-button>
  	</div>

  </div>
</template>

<script>
import {} from 'vux'

export default {
  components: {
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.menu-button {
  color:rgb(83,115,163);
  margin:1em 0;
}

</style>
