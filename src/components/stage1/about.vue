<template>
  <div>
    <div class="title">
      <h1>關於我們</h1>
    </div>
    
      <div class="contents">
        <img class="JOJO2" :src="path">
        <br>
        <h3>This is an Open Source Project</h3>
        <a href='https://github.com/realdennis/vue-tarot'>
                <img class="github" :src="gPath" alt="Github">
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
      gPath:'./static/github.jpg',
      path:'./static/JOJO2.jpg',
      msg: 'Hello World!'
    }
  },
  methods:{
    leaveHandler(){
      history.back();
    }
  }
}
</script>

<style scoped>
.JOJO2{
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
