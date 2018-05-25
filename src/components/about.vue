<template>
  <div>
    <div class="title">
      <h1>關於我們</h1>
    </div>
    
      <div class="contents">
        <img class="jojo" src="../assets/jojo.jpg" alt="這是命運的紙牌，塔羅牌！">
        <br>
        <h3>This is an Open Source Project</h3>
        <br>
        <a href='https://github.com/realdennis/vue-tarot'>
                GitHub
        </a>  
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.jojo{
  width:220px;
}
.contents{
  background-color: rgba(255,255,250,.4);
  text-align: center; 
  padding:30px;
  border:solid black 1.5px; 
  margin:10px;
  border-radius:10px;
}

</style>
