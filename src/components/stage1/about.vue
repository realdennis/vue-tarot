<template>
  <div>
    <div class="title">
      <h1>關於我們</h1>
    </div>
    
      <div class="contents">
        <img class="jojo" src="../../assets/jojo.jpg" alt="這是命運的紙牌，塔羅牌！">
        <br>
        <h3>This is an Open Source Project</h3>
        <a href='https://github.com/realdennis/vue-tarot'>
                <img class="github" src="../../assets/github.jpg" alt="Github">
                <br>
                Github
        </a>  
      </div>
  </div>
</template>

<script>
import {  } from 'vux'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.jojo{
  width:220px;
}
.github{
  width:40px;
}
.contents{
  background-color: white;
  text-align: center; 
  padding:10px;
  border:solid black; 
  margin:10px;
}

</style>
