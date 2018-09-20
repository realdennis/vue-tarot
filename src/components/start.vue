<template>
  <div id="menu">
    <div class="title">
      <h1>{{$t("message.main")}}</h1>
    </div>
    <div class="choose">
      <div class="row">
        <router-link to="daily" class="col">
          <p class="menu-button">{{$t("message.daily")}}</p>
        </router-link>
        <router-link to="spread" class="col">
          <p class="menu-button">{{$t("message.spread")}}</p>
        </router-link>
      </div>
      <div class="row">
        <router-link to="about" class="col">
          <p class="menu-button">{{$t("message.about")}}</p>
        </router-link>
        <router-link to="disclaimer" class="col">
          <p class="menu-button">{{$t("message.disclaimer")}}</p>
        </router-link>
      </div>
      <!--
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
          <x-button link="disclaimer" class="menu-button">{{$t("message.disclaimer")}}</x-button>
        </flexbox-item>
      </flexbox>
      -->
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
/*
.menu-button {
  padding: 30% 20%;
  border-radius: 10px;
  background-color: rgba(255, 255, 250, 0.4);
  color: rgba(3, 57, 101, 0.8);
  margin-bottom: 10px;
}
*/
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .col {
    display:flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
    color: black;
    height:150px;
    width: 200px;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;
    margin: 20px;
    /*
    border: 1px solid rgba(5, 0, 0, 0.1);
    //color: black;;
    //border-radius: 10px;
    height: 100px;
    width: 200px;
    //font-size: 20px;
    margin: 5px;
    background-color: rgb(249, 237, 233);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .menu-button {
      color: black;
      font-size: 20px;
    }
    */
    @media (max-width: 768px) {
      &{
        height:auto;
      }
      
    }
  }
}
</style>
