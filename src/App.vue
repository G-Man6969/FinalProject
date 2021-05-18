<!--
Name: Gavin Elliott
Date: 5/17/2021
Assignment: FinalProject
-->
<template>
  <div id="app">
    <!--Use the Nav component in order to get around-->
    <Nav></Nav>
    <br />
    <!--Use the new logo installed-->
    <img alt="Weather logo" src="./assets/logo.png" />
    <!--Show what is being used in that specific router-->
    <router-view></router-view>
  </div>
</template>

<script>
// Grab the Nav component in order to use it on the main app
import Nav from "./components/Nav.vue";

// Export this component to be used elsewhere
export default {
  name: "App",
  components: {
    // State all components used by this page
    Nav,
  },
};
</script>

<style>
/* Styling on the main body and the app as a whole */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: black;
}
body {
  background: black;
}
</style>
