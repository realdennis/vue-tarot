<template>
  <div id="menu">
  	<div class="title">
  		<h1>{{$t("message.main")}}</h1>	
  	</div>
  	<div class="choose" v-show="true">
      <flexbox>
          <flexbox-item>
  					<x-button link="daily" class="menu-button">{{$t("message.daily")}}</x-button>
          </flexbox-item>
          <flexbox-item>
  					<x-button link="spread" class="menu-button">{{$t("message.spread")}}</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
					<x-button link="about" class="menu-button">{{$t("message.about")}}</x-button>
					</flexbox-item>
          <flexbox-item>
          <x-button link="disclaimer" class="menu-button" >{{$t("message.disclaimer")}}</x-button>
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
}
</script>

<style scoped>
.menu-button{
  padding:30% 20%;
/*  background-color:rgba(22,150, 200,0.3);*/
  border-radius:10px;
  background-color:rgba(255,255,250,.4);
  color:rgba(3, 57, 101,.8);;
  margin-bottom:10px;
}

</style>
