<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
    }
  },
})
</script>

<template>
  <div class="wrapper-container">
    <div class="font-class grid first-page">
      <div class="grid first-page-header">
        <span class="header-text">Welcome to a World of <span class="gradient-text-color"> Vawulence</span> </span>
        <div class="grid first-page-subheader">
          <span class="flex subheader-text">Nothing serious comrade</span>
          <span class="flex subheader-text-two">It's all about cruise</span>
        </div>
        <button class="flex airdrop-button">Join Airdrop</button>
      </div>
      <img src="@/assets/images/Pepe.svg" alt="" class="flex pepe-img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800');
.font-class {
  font-family: 'Poppins';
  font-style: normal;
}
.gradient-text-color {
  background: linear-gradient(to left, #09BC3B, #61E1FD);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper-container {
  width: 100vw;
  .first-page {
    background-image: url(@/assets/images/Rectangle_background.svg);
    background-repeat: no-repeat;
    margin-top: 0;
    .first-page-header {
      width: 1000px;
      height: 200px;
      margin: 0 auto;
      margin-top: 15%;
      color: #FEFEFE;
      justify-content: center;
      text-align: center;
      .header-text {
        font-weight: 700;
        font-size: 50px;
        line-height: 53px;
      }
      .first-page-subheader {
        justify-content: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        span {
          justify-content: center;
          background: linear-gradient(to right, #EAFFD0, #61E1FD);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>