<template>
  <div class="spread">
    <div class="choose" v-if="!hasChoose">
      <div class="link">
        <button @click="()=>chooseHandler(1)" class="button">1</button>
        <button @click="()=>chooseHandler(3)" class="button">3</button>
        <button @click="()=>chooseHandler(5)" class="button">5</button>
      </div>
      <p>{{$t("message.spreadChoose")}}</p>
    </div>
    <spread-result v-else :num="number"></spread-result>
  </div>
</template>

<script>
import SpreadResult from '@/components/Spreadresult';
export default {
  components: { SpreadResult },
  data() {
    return {
      hasChoose: false,
      number: 0
    };
  },
  methods: {
    chooseHandler(num) {
      this.number = num;
      this.hasChoose = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.choose {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    .button {
      cursor: pointer;
      outline: none;
      text-align: center;
      background-color: rgba(10, 10, 10, 0.8);
      color: white;
      &:hover {
        opacity: 0.3;
      }
      width: 250px;
      border-radius: 10px;
      padding: 20px 40px;
      font-size: 20px;
      margin: 20px;
      @media (max-width: 900px) {
        & {
          width: 100%;
        }
      }
    }
  }
}
</style>
