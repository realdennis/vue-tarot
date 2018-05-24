<template>
  <div id="menu">
  	<div class="title">
  		<h1>主選單</h1>	
  	</div>
  	<div class="choose" v-show="true">
      <flexbox>
          <flexbox-item>
  					<x-button link="daily" class="menu-button">每日運勢</x-button>
          </flexbox-item>
          <flexbox-item>
  					<x-button link="spread" class="menu-button">抽牌機！</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
					<x-button link="about" class="menu-button">關於我們</x-button>
					</flexbox-item>
          <flexbox-item>
          <x-button link="disclaimer" class="menu-button" >免責聲明</x-button>
        </flexbox-item>
      </flexbox>
  	</div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
  components: {
    Flexbox, FlexboxItem
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
.menu-button{
  padding:30% 20%;
  background-color:rgba(22,150, 200,0.2);
  margin-bottom:10px;
}

</style>
