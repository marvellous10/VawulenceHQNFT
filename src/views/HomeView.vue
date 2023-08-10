<script lang="ts">
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
    }
  },
  methods: {
    triggerToast() {
      this.toast.info("Working on it", {
        //position: 'top-center',
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  },
  created() {
      document.title = 'VawulenceHQNFT'
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
        <div class="flex wallet-button-container">
          <button @click="triggerToast" class="flex wallet-button">
            Connect Wallet
          </button>
        </div>
      </div>
      <img src="@/assets/images/Pepe.png" class="flex pepe-img" alt="" srcset="">
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
              vibrant social media culture in Africa. It's centered on the friendly 
              online banters which has grown to be an integral part of the daily
              social life of an average african, widely referred to as vawulence 
              (an adulteration of word violence).
            </span>
          </div>
          <button @click="triggerToast" class="flex sp-ft-btn">
            <span class="gradient-text-color-right">Read Whitepaper</span>
            <img class="arrow-up-right-button" src="@/assets/images/arrow-up-right.svg">
          </button>
          <img src="@/assets/images/sticker_star.svg" class="star-sticker">
          <img src="@/assets/images/Ellipse_three.png" class="ellipse-three">
        </div>
      </div>
      <div class="second-page-second-elem">
        <img src="@/assets/images/Ellipse_four.png" alt="" class="ellipse-four">
        <div class="grid sp-st-text-wrapper">
          <span class="flex sp-st-header"> <span class="gradient-text-color-right sp-st-header-vw-txt">VawulenceHQ</span> First Drop</span>
          <span class="sp-st-text">
            The first drop <span class="gradient-text-color-right">(VHQ)</span>,
            made up of 1000 <span class="gradient-text-color-right">NFTs</span> will be categorized
            into three tiers as follows:
          </span>
        </div>
        <div class="flex tiers-wrapper">
          <div class="grid tier-one-container tiers-container">
            <span class="tiers-header-txt">Tier 1 <span class="gradient-text-color-right">(Army)</span></span>
            <span class="tiers-txt">
              900 <span class="gradient-text-color">NFTs</span>
            </span>
          </div>
          <div class="grid tier-two-container tiers-container">
            <span class="tiers-header-txt">Tier 2 <span class="gradient-text-color-right">(OGS)</span></span>
            <span class="tiers-txt">
             85 <span class="gradient-text-color">Collectibles</span>
            </span>
          </div>
          <div class="grid tier-three-container tiers-container">
            <span class="tiers-header-txt">Tier 3 <span class="gradient-text-color-right">(Custodians)</span></span>
            <span class="tiers-txt">
             15 <span class="gradient-text-color">Badges</span>
            </span>
          </div>
        </div>
        <img class="ellipse-six" src="@/assets/images/Ellipse_six.png">
      </div>
      <div class="second-page-third-elem">
        <div class="grid sp-tt-text-wrapper">
          <span class="sp-tt-header">Allocation</span>
          <span class="sp-tt-text">
            The allocation of the <span class="gradient-text-color">(VHQ)</span> will be categorized as follows:
          </span>
        </div>
        <div class="flex sp-tt-text-allocation-wrapper">
          <div class="grid sp-tt-text-adp-wrapper">
            <span class="flex sp-tt-text-adp-header">Airdrop</span>
            <span class="sp-tt-text-adp-text">100 <span class="gradient-text-color">NFTs</span></span>
          </div>
          <div class="grid sp-tt-text-adp-wrapper">
            <span class="flex sp-tt-text-adp-header">Presale</span>
            <span class="sp-tt-text-adp-text">300 <span class="gradient-text-color">NFTs</span></span>
          </div>
          <div class="grid sp-tt-text-adp-wrapper">
            <span class="flex sp-tt-text-adp-header">Public Mint</span>
            <span class="sp-tt-text-adp-text">600 <span class="gradient-text-color">NFTs</span></span>
          </div>
        </div>
        <div class="flex btn-wrapper">
          <button @click="triggerToast" class="flex sp-ft-btn">
            <span class="gradient-text-color-right">Join Airdrop</span>
            <img class="arrow-up-right-button" src="@/assets/images/arrow-up-right.svg">
          </button>
        </div>
        <img class="asterisk" src="@/assets/images/Sticker_asterisk.svg">
      </div>
      <hr class="line-break">
      <div class="second-page-fourth-elem">
        <div class="flex sp-ftt-text-wrapper">
          <span class="roadmap-text">Roadmap</span>
          <img class=roadmap-arrow-one src="@/assets/images/Arrow_one.svg">
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container pending-background margin-custom-2">
            <span class="phase-text-header">Phase One</span>
          </div>
          <div class="flex phase-text-wrapper">
            <span class="phase-text">
              Pepe VawulenceHQ <span class="gradient-text-color-right">Army NFT</span> Drop <span class="gradient-text-color-right">(VHQ-A)</span> <span class="gradient-text-color-right">- Governance Token</span>
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container pending-background margin-custom-2">
            <span class="phase-text-header">Phase Two</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Pepe VawulenceHQ <span class="gradient-text-color-right">OG NFT </span>Drop <span class="gradient-text-color-right">(VHQ-OGs)</span>
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-1">
            <span class="phase-text-header">Phase Three</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Pepe VawulenceHQ <span class="gradient-text-color-right">Custodians NFT</span> Drop <span class="gradient-text-color-right">(VHQ-CC)</span>
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-3">
            <span class="phase-text-header">Phase Four</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Launch of Pepe <span class="gradient-text-color-right">Vawulence</span> Token <span class="gradient-text-color-right">($VAWU)</span>
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-2">
            <span class="phase-text-header">Phase Five</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Pepe <span class="gradient-text-color-right">Vawulence</span> Metaverse <span class="gradient-text-color-right">(Vawuverse)</span>
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-4">
            <span class="phase-text-header">Phase Six</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Social Media <span class="gradient-text-color-right">Vawulence</span> Campaign
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-5">
            <span class="phase-text-header">Phase Seven</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              Comrade <span class="gradient-text-color-right">Vawulence</span> Arenas
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-6">
            <span class="phase-text-header">Phase Eight</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              <span class="gradient-text-color-right">Vawulence P2E</span> Game
            </span>
          </div>
        </div>
        <div class="flex phase-wrapper">
          <div class="phase-container unstarted-background margin-custom-2">
            <span class="phase-text-header">Phase Nine</span>
          </div>
          <div class="grid phase-text-wrapper">
            <span class="phase-text">
              <span class="gradient-text-color-right">Roadmap 2.0 (Vawulence Takeover)</span>
            </span>
          </div>
        </div>
        <div class="flex whitepaper-button-wrapper">
          <button @click="triggerToast" class="flex">
            <span class="gradient-text-color-right">Read Whitepaper</span>
            <img class="arrow-up-right-button" src="@/assets/images/arrow-up-right.svg">
          </button>
        </div>
        <img class="ellipse-seven" src="@/assets/images/Ellipse_seven.png">
      </div>
      <div class="flex second-page-fifth-elem">
        <div class="img-nf-con">
          <div class="img-nf-1">
            <img class="img-nf-1-img" src="@/assets/images/nft_folder/Cupace_eleven.png">
          </div>
          <div class="img-nf-2">
            <img class="img-nf-2-img" src="@/assets/images/nft_folder/Cupace_twelve.png">
          </div>
        </div>
        <div class="grid sp-fe-txt">
          <span class="txt-snk-pk">Sneak Peak!</span>
          <span class="txt-sp-fe-txt">Virtual <span class="gradient-text-color-right">Vawulence</span> Arena</span>
          <span class="txt-sp-fe-txt">Merch Store</span>
          <span class="txt-sp-fe-txt"><span class="gradient-text-color-right">Web3 Decentralized</span> Social Media Platform</span>
        </div>
      </div>
      <hr class="line-break">
      <div class="second-page-sixth-elem">
        <div class="flex vw-lre-con">
          <span class="vw-lre"> <span class="gradient-text-color-right">VawulenceHQ</span> Lore</span>
        </div>
        <div class="grid vw-lre-txt-span">
          <span class="vw-lre-txt">
            <span class="gradient-text-color-right">Vawulence</span> is an adulterated version of the English word 'violence'. It's a friendly way of 
            describing an extremely funny and subtle shade/banter/joke, mostly on social media 
            platforms which are usually supported with a special kind of Pepe inspired meme. It 
            usually refers to toxicity, a fun kind of toxicity among friends and peers in an online 
            gathering.
          </span>
          <span class="vw-lre-txt">
            <span class="gradient-text-color-right">Vawulence</span> is an African slang which started as a means of escaping 
            Facebook ban and restrictions in comment section for using the original phrase 
            'violence' that seems to has been blacklisted.
            
            The primary purpose of <span class="gradient-text-color-right">vawulence</span> is to 
            put laughter on people's face, that's why all <span class="gradient-text-color-right">vawulence</span> memes are prepared in such a 
            way that they are undoubtedly hilarious. If <span class="gradient-text-color-right">vawulence</span> memes don't make you laugh, 
            what else would?
          </span>
          <span class="vw-lre-txt">
            There are two types of <span class="gradient-text-color-right">Comrades:</span> the strong and the weak <span class="gradient-text-color-right">comrades</span>. A strong 
            <span class="gradient-text-color-right">comrade</span> goes head-on against any form of <span class="gradient-text-color-right">vawulence</span> thrown at him at any time 
            while a weak <span class="gradient-text-color-right">comrade</span> cowers whenever he encounters <span class="gradient-text-color-right">vawulence</span>. A strong <span class="gradient-text-color-right">comrade</span> 
            understands that <span class="gradient-text-color-right">vawulence</span> is best served online and never to engage in any physical 
            scuffle whatsoever, whereas a weak <span class="gradient-text-color-right">comrade</span> does otherwise.
          </span>
        </div>
        <img class="ellipse-five" src="@/assets/images/Ellipse_five.png">
      </div>
      <div class="second-page-seventh-elem">
        <div class="flex sp-sv-header-container">
          <img src="@/assets/images/sticker_star.svg" class="star-nft-sticker">
          <span class="sp-sv-header-txt"><span class="gradient-text-color-right">NFT</span> Collection</span>
          <img src="@/assets/images/Arrow_one.svg" class="arrow-one-sticker">
        </div>
        <div class="grid img-nc-con">
          <div class="flex img-nc-1">
            <div>
              <img src="@/assets/images/nft_folder/Cupace_eight.png">
            </div>
            <div>
              <img src="@/assets/images/nft_folder/Cupace_seven.png">
            </div>
            <div>
              <img src="@/assets/images/nft_folder/Cupace_nine.png">
            </div>
            <div>
              <img src="@/assets/images/nft_folder/Cupace_ten.png">
            </div>
          </div>
          <div class="flex img-nc-2">
            <div>
              <img src="@/assets/images/nft_folder/Cupace_two.png">
            </div>
            <div>
              <img src="@/assets/images/nft_folder/Cupace_three.png">
            </div>
            <div class="img-nc-2-3-con">
              <img src="@/assets/images/nft_folder/Cupace_one.png">
            </div>
            <div class="img-nc-2-4-con">
              <img src="@/assets/images/nft_folder/Cupace_four.png">
            </div>
          </div>
        </div>
        <img class="ellipse-seven" src="@/assets/images/Ellipse_eight.png">
      </div>
      <hr class="line-break">
      <div class="second-page-eight-elem">
        <div class="flex sp-ee-header-container">
          <span class="sp-ee-header-text">
            Meet the <span class="gradient-text-color-right">Team</span>
          </span>
        </div>
        <div class="flex team-container">
          <div class="grid tm-container">
            <div class="tm">
              <img src="@/assets/images/team_folder/Albert.jpg">
            </div>
            <label class="tm-label gradient-text-color-right">
              <a href="https://twitter.com/Austinalbert99"  target="_blank" rel="noreferrer noopener">AustinAlbert99</a>
            </label>
          </div>
          <div class="grid tm-container">
            <div class="tm">
              <img src="@/assets/images/team_folder/over.jpg">
            </div>
            <label class="tm-label gradient-text-color-right">Over</label>
          </div>
          <div class="grid tm-container">
            <div class="tm">
              <img src="@/assets/images/team_folder/crypto_guy.jpg">
            </div>
            <label class="tm-label gradient-text-color-right">
              <a href="https://www.twitter.com/Crypto_Guy_Sol"  target="_blank" rel="noreferrer noopener">Crypto_Guy_Sol</a>
            </label>
          </div>
          <div class="grid tm-container">
            <div class="tm">
              <img src="@/assets/images/team_folder/Adeola.jpg">
            </div>
            <label class="tm-label gradient-text-color-right">
              <a href="https://www.twitter.com/ololademiadeola"  target="_blank" rel="noreferrer noopener">Adeola -UIUX-</a>
            </label>
          </div>
        </div>
      </div>
      <hr class="line-break-end">
      <footer class="flex footer">
        <div class="vw-text">
          <span class="gradient-text-color-right">VawulenceHQNFT</span>
        </div>
        <div class="flex ftr-scls">
          <div class="flex discord-logo">
            <a href="https://www.discord.gg/HJREAC3P" target="_blank" rel="noreferrer noopener">
              <font-awesome-icon icon="fa-brands fa-discord" size="2xl" style="color: #7289da;" />
            </a>
          </div>
          <div class="flex twitter-logo">
            <a href="https://www.twitter.com/VawulenceHQNFT" target="_blank" rel="noreferrer noopener">
              <font-awesome-icon size="2xl" icon="fa-brands fa-twitter" style="color: #1d9bf0;" />
            </a>
          </div>
        </div>
      </footer>
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
      .wallet-button-container {
        justify-content: center;
        align-items: center;
        .wallet-button {
          border: 1.5px solid #FEFEFE;
          border-radius: 10px;
          width: auto;
          background: #FEFEFE;
          color: #0D0D0D;
          height: auto;
          padding: 5px;
          padding-left: 15px;
          padding-right: 15px;
          justify-content: center;
          font-size: 15px;
          font-weight: 600;
          line-height: 47px;
          transition: 0.15s ease-in-out;

        }
        .wallet-button:active {
          background: #0D0D0D;
          color: #FEFEFE;
        }
      }
    }
    .pepe-img {
      position: relative;
      top: -10px;
      z-index: 0;
      max-width: 100%;
      height: auto;
      width: 500px;
    }
  }
  .second-page {
    position: absolute;
    background: #0D0D0D;
    width: 100%;
    height: auto;
    padding-bottom: 70px;
    margin-bottom: 0;
    z-index: 2;
    margin-top: -5.5rem;
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
          right: 7.5rem;
        }
        .ellipse-three {
          position: absolute;
          top: 100px;
          right: 0px;
          z-index: -1;
        }
      }
    }
    .second-page-second-elem {
      margin-top: 5rem;
      color: #FEFEFE;
      .ellipse-four {
        position: absolute;
        top: 200px;
        left: 0;
        z-index: -1;
      }
      .sp-st-text-wrapper {
        width: 100%;
        align-items: center;
        justify-content: center;
        .sp-st-header {
          font-size: 35px;
          line-height: 37px;
          font-weight: 600;
          margin: 0 auto;
          margin-bottom: 1rem;
        }
        .sp-st-text {
          width: 500px;
          height: auto;
          margin: 0 auto;
          text-align: center;
          font-size: 15px;
          font-weight: 400;
          line-height: 20px;

        }
      }
      .tiers-wrapper {
        //border: 1.5px solid;
        margin-top: 2.5rem;
        height: auto;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
        justify-content: space-evenly;
        padding: 30px 0px 30px 0px;
        //border-image-slice: 1;
        //border-image: linear-gradient(to right, #09BC3B, #61E1FD);
        .tiers-container {
          width: 300px;
          height: 80%;
          padding-left: 15px;
          padding-right: 15px;
          .tiers-header-txt {
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            line-height: 23px;
            margin-top: 7.5px;
            margin-bottom: 1rem;
          }
          .tiers-txt {
            text-align: center;
          }
        }
      }
      .ellipse-six {
        position: absolute;
        top: 700px;
        left: 300px;
        z-index: -1;
      }
    }
    .second-page-third-elem {
      color: #FEFEFE;
      margin-top: 5rem;
      .sp-tt-text-wrapper {
        width: 100%;
        height: auto;
        justify-content: center;
        .sp-tt-header {
          font-size: 32.5px;
          font-weight: 600;
          margin: 0 auto;
        }
        .sp-tt-text {
          font-size: 15px;
          font-weight: 400;
          line-height: 20px;
        }
      }
      .sp-tt-text-allocation-wrapper {
        margin-left: 20rem;
        margin-right: 20rem;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 1rem;
        justify-content: space-evenly;
        .sp-tt-text-adp-wrapper {
          padding-left: 10px;
          padding-right: 10px;
          justify-content: center;
          .sp-tt-text-adp-header {
            font-size: 20px;
            font-weight: 500;
            line-height: 23px;
            margin-bottom: 0.5rem;
            text-align: center;
          }
          .sp-tt-text-adp-text {
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            margin: 0 auto;
          }
        }
      }
      .btn-wrapper {
        margin-top: 1rem;
        justify-content: center;
        .sp-ft-btn {
          font-size: 15px;
          font-weight: 400;
          align-items: center;
        }
      }
      .asterisk {
        position: absolute;
        top: 850px;
        left: 7.5rem;
        width: 50px;
        height: 50px;
      }
    }
    .line-break {
      margin-top: 5rem;
      margin-left: 7.5rem;
      margin-right: 7.5rem;
      border: 1.5px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
    }
    .second-page-fourth-elem {
      color: #FEFEFE;
      margin-top: 2.5rem;
      .sp-ftt-text-wrapper {
        justify-content: center;
        align-items: center;
        .roadmap-text {
          font-size: 32.5px;
          font-weight: 600;
          line-height: 37px;
        }
        img {
          position: absolute;
          right: 7.5rem;
          width: 50px;
          height: 50px;
        }
      }
      .phase-wrapper {
        margin-top: 2.5rem;
        align-items: center;
        margin-left: 15rem;
        margin-right: 15rem;
        justify-content: left;
        .phase-container {
          width: auto;
          height: auto;
          padding: 5px 10px 5px 10px;
          border-radius: 20px;
          .phase-text-header {
            font-size: 15px;
            font-weight: 600;
          }
        }
        .phase-text-wrapper {
          .phase-text {
            //text-align: center;
            font-size: 15px;
            font-weight: 500;
          }
        }
      }
      .whitepaper-button-wrapper {
        margin-top: 3rem;
        color: white;
        align-items: center;
        justify-content: center;
      }
      .ellipse-seven {
        position: absolute;
        right: 0;
        top: 1500px;
        z-index: -1;
      }
    }
    .second-page-fifth-elem {
      color: white;
      margin-top: 5rem;
      align-items: center;
      .img-nf-con {
        margin-left: 2.5rem;
        width: 554px;
        height: 426px;
        .img-nf-1 {
          position: absolute;
          z-index: 1;
          background:#FEFEFE;
          border-radius: 20px;
          width: 358px;
          height: 358px;
          .img-nf-1-img {
            display: flex;
            border-radius: 20px;
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
          }
        }
        .img-nf-2 {
          position: absolute;
          z-index: 2;
          background: #FEFEFE;
          border: 1px solid black;
          border-radius: 20px;
          width: 358px;
          height: 358px;
          left: 235px;
          top: 2095px;
          .img-nf-2-img {
            display: flex;
            border-radius: 20px;
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
          }
        }
      }
      .sp-fe-txt {
        margin-left: 5rem;
        height: auto;
        .txt-snk-pk {
          font-size: 32.5px;
          font-weight: 600;
          line-height: 37px;
          margin-bottom: 0.5rem;
        }
        .txt-sp-fe-txt {
          font-size: 15px;
          font-weight: 500;
          line-height: 20px;
          margin-bottom: 0.5rem;
        }
      }
    }
    .second-page-sixth-elem {
      color: white;
      margin-top: 2.5rem;
      margin-left: 7.5rem;
      margin-right: 7.5rem;
      .vw-lre-con {
        align-items: center;
        justify-content: center;
        font-size: 32.5px;
        font-weight: 600;
        line-height: 37px;
        margin-bottom: 1.5rem;
      }
      .vw-lre-txt-span {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        .vw-lre-txt {
          margin-bottom: 1rem;
          text-align: center;
        }
      }
      .ellipse-five {
        position: absolute;
        left: 0;
        top: 2200px;
        z-index: -1;
      }
    }
    .second-page-seventh-elem {
      margin-top: 5rem;
      color: white;
      .sp-sv-header-container {
        justify-content: center;
        align-items: center;
        margin-bottom: 2.5rem;
        .star-nft-sticker {
          width: 50px;
          height: 50px;
        }
        .arrow-one-sticker {
          width: 50px;
          height: 50px;
        }
        .sp-sv-header-txt {
          font-size: 32.5px;
          font-weight: 600;
          line-height: 37px;
          margin-right: 7.5rem;
          margin-left: 7.5rem;
        }
      }
      .img-nc-con {
        .img-nc-1 {
          margin-bottom: 2rem;
          justify-content: center;
          div {
            width: 182px;
            height: 182px;
            margin-right: 1.5rem;
            border-radius: 10px;
            background: #FEFEFE;
            img {
              display: flex;
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              border-radius: 10px;
            }
          }
          div:nth-child {
            margin-right: 0;
          }
        }
        .img-nc-2 {
          justify-content: center;
          margin-bottom: 2rem;
          div {
            width: 182px;
            height: 182px;
            margin-right: 1.5rem;
            background: #FEFEFE;
            border-radius: 10px;
            img {
              display: flex;
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              border-radius: 10px;
            }
          }
          div:nth-child {
            margin-right: 0;
          }
        }
      }
      .ellipse-seven {
        position: absolute;
        left: 0;
        top: 2900px;
        z-index: -1;
      }
    }
    .second-page-eight-elem {
      margin-top: 2.5rem;
      color: #FEFEFE;
      .sp-ee-header-container {
        justify-content: center;
        margin-bottom: 2rem;
        .sp-ee-header-text {
          font-size: 32.5px;
          font-weight: 600;
          line-height: 37px;
        }
      }
      .team-container {
        justify-content: center;
        margin-bottom: 2rem;
        .tm-container {
          width: 170px;
          height: 200px;
          margin-right: 2rem;
          text-align: center;
          .tm {
            width: 170px;
            height: 182px;
            border-radius: 10px;
            background: #FEFEFE;
            img {
              display: flex;
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              border-radius: 10px;
            }
          }
          label {
            margin-top: 0.5rem;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
          }
        }
        div:nth-last-child() {
          margin-right: 0;
        }
      }
    }
    .line-break-end {
      margin-top: 15rem;
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      border: 1.5px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
    }
    .footer {
      margin-top: 0.5rem;
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      align-items: center;
      justify-content: space-between;
      color: #FEFEFE;
      .vw-text {
        span {
          font-weight: 600;
          font-size: 25px;
          line-height: 30px;
        }
      }
      .ftr-scls {
        align-items: center;
        justify-content: space-between;
        margin-right: 0.3rem;
        .discord-logo {
          justify-content: center;
          align-items: center;
          margin-right: 1rem;
        }
        .twitter-logo {
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .tier-two-container {
    border-left: 2px solid;
    border-right: 2px solid;
    border-image-slice: 1;
    height: 300px;
    border-image-source: linear-gradient(to bottom, #09BC3B, #61E1FD);
  }
  .margin-custom-6 {
    margin-right: 2rem;
  }
  .margin-custom-5 {
    margin-right: 1.5rem;
  }
  .margin-custom-4 {
    margin-right: 2.9rem;
  }
  .margin-custom-3 {
    margin-right: 2.3rem;
  }
  .margin-custom-2 {
    margin-right: 2.5rem;
  }
  .margin-custom-1 {
    margin-right: 1.75rem;
  }
  .sp-st-header-vw-txt {
    margin-right: 7.5px;
  }
  .pending-background {
    background: linear-gradient(to right, #FFAD00 99.9%, #09BC3B);
  }
  .completed-background {
    background:  linear-gradient(to right, #09BC3B, #61E1FD);
  }
  .unstarted-background {
    background:  linear-gradient(to right, #FF0040 99.9%, #09BC3B);
  }
}
@media only screen and (max-width: 480px) {
  .wrapper-container {
    .first-page {
      height: 130vh;
      width: 100vw;
      .first-page-header {
        margin-top: 7.5rem;
      }
      .pepe-img {
        display: none;
      }
    }
    .second-page {
      width: 100vw;
      overflow-x: hidden;
      .second-page-first-elem {
        width: 100vw;
        margin-left: 0rem;
        display: grid;
        .second-page-img {
          width: 100vw;
          height: 250px;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .second-page-first-text {
          .sp-ft-text {
            width: 80vw;
            justify-content: center;
            .sp-ft-header {
              margin-left: 5rem;
              text-align: center;
            }
            .sp-ft-subtext {
              margin-left: 5rem;
              text-align: center;
            }
          }
          .sp-ft-btn {
            background: transparent;
            margin-left: 32.5vw;
          }
          .star-sticker {
            top: 700px;
            width: 40px;
            height: 40px;
            left: 100px;
          }
        }
      }
      .second-page-second-elem {
        width: 100vw;
        margin-left: 0rem;
        display: grid;
        .ellipse-four {
          top: 300px;
          left: -50px;
          z-index: -1;
        }
        .sp-st-text-wrapper {
          justify-content: center;
          width: 80vw;
          margin-left: 2.5rem;
          text-align: center;
          .sp-st-header {
            display: grid;
            width: 80vw;
          }
          .sp-st-text {
            width: 80vw;
          }
        }
        .tiers-wrapper {
          display: grid;
          .tiers-container {
            height: 80px;
            border-bottom: 2px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
          }
          .tier-two-container {
            border-left: 0;
            border-right: 0;
          }
          .tier-one-container {
            border-top: 2px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
          }
        }
        .ellipse-six{
          top: 900px;
        }
      }
      .second-page-third-elem {
        width: 100vw;
        margin-left: 0rem;
        display: grid;
        margin-top: 3rem;
        .sp-tt-text-wrapper {
          width: 100vw;
          text-align: center;
        }
        .sp-tt-text-allocation-wrapper {
          display: grid;
          margin: auto;
          .sp-tt-text-adp-wrapper {
            margin-top: 1rem;
          }
        }
        .asterisk {
          width: 40px;
          height: 40px;
          top: 1225px;
          left: 300px;
        }
      }
      .second-page-fourth-elem {
        margin-top: 1rem;
        width: 100vw;
        margin-left: 0rem;
        display: grid;
        .sp-ftt-text-wrapper {
          width: 100vw;
          .roadmap-arrow-one {
            position: absolute;
            right: 50px;
            width: 30px;
            height: 30px;
          }
        }
        .phase-wrapper {
          display: grid;
          width: 100vw;
          margin-left: 0;
          text-align: center;
          .phase-container {
            display: flex;
            margin-bottom: 1rem;
            width: 8rem;
            margin-left: 9rem;
            justify-content: center;
            align-items: center;
          }
          .phase-text {
            font-size: 20px;
            font-weight: 500;
            justify-content: center;
            width: 100vw;
          }
        }
        .whitepaper-button-wrapper {
          width: 100vw;
        }
      }
      .second-page-fifth-elem {
        display: grid;
        .img-nf-con {
          display: flex;
          width: 100vw;
          margin-left: 0;
          height: 200px;
          justify-content: space-evenly;
          align-items: center;
          margin-bottom: 1rem;
          .img-nf-1 {
            position: static;
            width: 150px;
            height: 150px;
          }
          .img-nf-2 {
            position: static;
            width: 150px;
            height: 150px;
          }
        }
        .sp-fe-txt {
          width: 100vw;
          margin-left: 0;
          text-align: center;
        }
      }
      .second-page-sixth-elem {
        margin-top: 1rem;
        text-align: center;
        width: 100vw;
        margin-left: 0;
        .vw-lre-txt-span {
          width: 80vw;
          margin: auto;
          margin-top: 0;
        }
      }
      .second-page-seventh-elem {
        width: 100vw;
        margin-left: 0;
        margin-bottom: 1rem;
        text-align: center;
        .sp-sv-header-container {
          margin-bottom: 1rem;
          .arrow-one-sticker {
            position: absolute;
            right: 20px;
            width: 35px;
            height: 35px;
          }
          .star-nft-sticker {
            position: absolute;
            left: 20px;
            width: 40px;
            height: 40px;
          }
        }
        .img-nc-con {
          margin-top: 0;
          .img-nc-1 {
            display: grid;
            grid: repeat(2, 110px) / 110px 100px;
            width: 90vw;
            margin: auto;
            div {
              width: 100px;
              height: 100px;
            }
          }
          .img-nc-2 {
            display: grid;
            grid: repeat(2, 52.5px) / 110px 100px;
            width: 90vw;
            margin: auto;
            div {
              width: 100px;
              height: 100px;
            }
            .img-nc-2-3-con {
              display: none;
            }
            .img-nc-2-4-con {
              display: none;
            }
          }
        }
      }
      .second-page-eight-elem {
        margin-top: 1rem;
        width: 100vw;
        margin-left: 0;
        .sp-ee-header-container {
          margin-bottom: 1rem;
        }
        .team-container {
          display: grid;
          margin-top: 0;
          width: 80vw;
          grid: repeat(2, 180px) / 150px 130px;
          margin: auto;
          .tm-container {
            width: 130px;
            height: 170px;
            text-align: center;
            .tm {
              height: 140px;
              width: 130px;
              margin-bottom: 0;
            }
            .tm-label {
              margin-top: 0;
              font-size: 13px;
              font-weight: 500;
            }
          }
        }
      }
      .line-break {
        margin-top: 4rem;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
      }
      .line-break-end {
        margin-top: 5rem;
      }
      .footer {
        margin-top: 0;
        .vw-text {
          font-size: 20px;
          font-weight: 600;
        }
        .ftr-scls {
          .discord-logo {
            font-size: 13px;
          }
          .twitter-logo {
            font-size: 13px;
          }
        }
      }
    }
  } 
}
</style>