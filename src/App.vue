<template>
  <nav class="flex font-class">
    <div class="flex nav-wrapper">
      <router-link to="/" class="flex logo-container">
        <img src="@/assets/images/Vawulence_logo.svg" alt="Logo">
      </router-link>
      <div class="flex nav-router-links">
        <router-link to="/">Home</router-link>
        <router-link to="/airdrop">Airdrop</router-link>
        <router-link to="/roadmap">Roadmap</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <button class="flex whitelist-button">Whitelist</button>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800');
.font-class {
  font-family: 'Poppins';
  font-style: normal;
}

nav {
  background: #252525;
  align-items: center;
  height: 50px;
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
