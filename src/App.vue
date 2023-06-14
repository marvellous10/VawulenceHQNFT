<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <nav class="flex font-class">
    <div class="flex nav-wrapper">
      <a href="/" class="flex logo-container">
        <img src="@/assets/images/Vawulence_logo.svg" alt="Logo">
      </a>
      <div class="flex nav-router-links">
        <router-link to="/">Home</router-link>
        <router-link to="/airdrop">Airdrop</router-link>
        <router-link to="/roadmap">Roadmap</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-link to="/whitelist" class="flex whitelist-link">
        Whitelist
        <img class="nav-star-sticker" src="@/assets/images/sticker_star.svg" alt="">
        <img class="nav-star-sticker pos-two" src="@/assets/images/sticker_star.svg" alt="">
      </router-link>
    </div>
  </nav>
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

nav a.router-link-exact-active {
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #09BC3B, #61E1FD);
  //09BC3B, 61E1FD, (00C853, B2FF59)
}
</style>
