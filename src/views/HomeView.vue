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
        <span class="header-text">Welcome to a World of <span class="gradient-text-color-right"> Vawulence</span> </span>
        <div class="grid first-page-subheader">
          <span class="flex subheader-text">Nothing serious comrade</span>
          <span class="flex subheader-text-two">It's all about cruise</span>
        </div>
        <div class="flex airdrop-button-container">
          <button class="flex airdrop-button">Join Airdrop</button>
        </div>
      </div>
      <img src="@/assets/images/Pepe.svg" alt="" class="flex pepe-img">
    </div>
    <div class="font-class second-page">
      <div class="flex second-page-first-elem">
        <div class="flex second-page-img">
          <img class="po-pic" src="@/assets/images/page_one_picture.svg">
        </div>
        <div class="second-page-first-text">
          <div class="grid sp-ft-text">
            <span class="sp-ft-header">
              What is <span class="gradient-text-color-right">Pepe Vawulence?</span>
            </span>
            <span class="sp-ft-subtext">
              <span class="gradient-text-color-right">Pepe VawulenceHQ</span> is a meme based project inspired by the 
              vibrant social media culture in Africa. It’s centered on the friendly 
              online banters which has grown to be an integral part of the daily
              social life of an average african, widely referred to as vawulence 
              (an adulteration of word violence).
            </span>
          </div>
          <button class="flex sp-ft-btn">
            <span class="gradient-text-color-right">Read Whitepaper</span>
            <img class="arrow-up-right-button" src="@/assets/images/arrow-up-right.svg">
          </button>
          <img src="@/assets/images/sticker_star.svg" class="star-sticker">
          <img src="@/assets/images/Ellipse_three.svg" class="ellipse-three">
        </div>
      </div>
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
.gradient-text-color-right {
  background: linear-gradient(to right, #09BC3B, #61E1FD);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper-container {
  width: 100vw;
  overflow-x: hidden;
  .first-page {
    background-image: url(@/assets/images/Rectangle_background.svg);
    background-repeat: no-repeat;
    margin-top: 0;
    width: 100vw;
    .first-page-header {
      width: 80%;
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
        margin-top: 1rem;
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
        margin-bottom: 2rem;
      }
      .airdrop-button-container {
        justify-content: center;
        align-items: center;
        .airdrop-button{
          border-radius: 10px;
          width: auto;
          height: auto;
          padding: 5px;
          padding-left: 15px;
          padding-right: 15px;
          background: linear-gradient(to right, #09BC3B, #61E1FD);
          justify-content: center;
          align-content: center;
          font-size: 15px;
          font-weight: 600;
          line-height: 47px;
          filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
          transition: 0.15s ease-out;
        }
        .airdrop-button:active {
          background: transparent;
          border: 1px solid #09BC3B;
        }
      }
    }
    .pepe-img {
      position: relative;
      top: -205px;
      z-index: 0;
      max-width: 100%;
      height: auto;
    }
  }
  .second-page {
    position: absolute;
    background: #0D0D0D;
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    z-index: 2;
    margin-top: -19.5rem;
    .second-page-first-elem {
      justify-content: space-between;
      height: auto;
      width: auto;
      margin: 5rem 2.5rem 0rem 2.5rem;
      color: white;
      .second-page-img {
        width: 350px;
        height: 350px;
        .po-pic {
          max-height: 100%;
          max-width: 100%;
        }
      }
      .second-page-first-text {
        width: 600px;
        .sp-ft-text {
          .sp-ft-header {
            font-weight: 600;
            font-size: 35px;
            line-height: 37px;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .sp-ft-subtext {
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
          }
          margin-bottom: 1.5rem;
        }
        .sp-ft-btn-wrapper {
          border: 1px solid;
          justify-content: center;
          align-items: center;
          width: 179px;
          background: linear-gradient(to left, #09BC3B, #61E1FD);
          border-radius: 7.5px;
        }
        .sp-ft-btn {
          width: auto;
          outline: 0;
          font-size: 15px;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 7.5px;
          background: #0D0D0D;
          .arrow-up-right-button {
            margin-left: 5px;
            height: 18px;
            width: 18px;
          }
        }
        .star-sticker {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 300px;
          right: 200px;
        }
        .ellipse-three {
          position: absolute;
          top: 100px;
          right: 0px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .first-page {
      height: auto;
      width: 100vw;
      .pepe-img {
        max-width:100%;
        height:auto;
        margin-top: 30.75rem;
      }
    }
   .second-page {
    margin-top: -16rem;
   } 
  }
}
</style>