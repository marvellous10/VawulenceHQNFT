<script lang="ts">
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification';

export default defineComponent({
  name: 'App',
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      navbar_expanded: false,
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
      }
      );

      this.$router.push('/')
    },
    expandNavbar() {
      if (this.navbar_expanded == false) {
        this.navbar_expanded = true
      }
      else {
        this.navbar_expanded = false
      }
    }
  }
})
</script>


<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <nav class="flex font-class">
    <div class="flex nav-wrapper">
      <a href="/" class="flex logo-container">
        <img src="@/assets/images/Vawulence_logo.png" alt="Logo">
      </a>
      <div class="flex nav-router-links">
        <router-link to="/">Home</router-link>
        <router-link to="/airdrop" @click="triggerToast">Airdrop</router-link>
        <router-link to="/about" @click="triggerToast">About</router-link>
        <router-link to="/contact" @click="triggerToast">Contact</router-link>
      </div>
      <router-link to="/whitelist" @click="triggerToast" class="flex whitelist-link">
        Whitelist
        <img class="nav-star-sticker" src="@/assets/images/sticker_star.png" alt="">
        <img class="nav-star-sticker pos-two" src="@/assets/images/sticker_star.png" alt="">
      </router-link>
    </div>
    <div class="harmburger-menu">
      <a href="/" class="flex logo-container">
        <img src="@/assets/images/Vawulence_logo.png" alt="Logo">
      </a>
      <button @click="expandNavbar">=</button>
    </div>
  </nav>
  <div class="mobile-nav-router-links" v-if="navbar_expanded == true">
        <router-link class="router-link home" to="/">Home</router-link>
        <router-link class="router-link" to="/airdrop" @click="triggerToast">Airdrop</router-link>
        <router-link class="router-link" to="/about" @click="triggerToast">About</router-link>
        <router-link class="router-link" to="/contact" @click="triggerToast">Contact</router-link>
        <router-link to="/whitelist" @click="triggerToast" class="flex router-link whitelist-link">
          Whitelist
        </router-link>
      </div>
  <div class="app-wrapper">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800');
.font-class {
  font-family: 'Poppins';
  font-style: normal;
}
.app-wrapper {
  overflow-x: hidden;
}
.whitelist-link {
  background: linear-gradient(to right, #09BC3B, #61E1FD);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  .nav-star-sticker {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 30px;
    top: 10px;
  }
  .pos-two {
    top: 25px;
    right: 102.5px;
  }
}

nav {
  background: #0D0D0D;
  align-items: center;
  height: 50px;
  width: 100%;
  color: #FEFEFE;
  .logo-container {
    width: 40px;
    height: 40px;
  }
  .nav-router-links {
    font-weight: 400;
    font-size: 15px;
    //border: 1px solid;
    margin-right: 2.5rem;
    width: 60%;
    justify-content: space-evenly;
  }
  .whitelist-button {
    border: 1px solid;
    //border-image-slice: 0.7;
    //border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
    width: 80px;
    height: 30px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 7.5px;
    font-size: 15px;
    font-weight: 400;
  }
}

.nav-wrapper {
  width: 100%;
  align-items: center;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  justify-content: space-between;
}

.harmburger-menu {
  display: none;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
  //09BC3B, 61E1FD, (00C853, B2FF59)
}

@media only screen and (max-width: 480px) {
  nav {
    .nav-wrapper {
      display: none;
    }
  }
  .harmburger-menu {
    width: 100%;
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      outline: 0;
      border: 1px solid #FEFEFE;
      border-radius: 5px;
      width: 2rem;
      height: 2rem;
      font-size: large;
      font-weight: bold;
    }
  }
  .mobile-nav-router-links {
    font-family: 'Poppins';
    font-style: normal;
    border-top: 1.5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
    padding-right: 3rem;
    padding-left: 3rem;
    display: grid;
    width: 100%;
    height: 10rem;
    position: relative;
    background: #0D0D0D;
    color: #FEFEFE;
    .home {
      margin-top: 5px;
    }
    .router-link {
      margin-bottom: 5px;
    }
  }
}
</style>
