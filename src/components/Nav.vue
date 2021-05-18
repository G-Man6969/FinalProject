<!--
Name: Gavin Elliott
Date: 5/17/2021
Assignment: FinalProject
-->
<template>
<!--This is all bootstrap so I didn't do much here-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!--Create the links in the Navbar to connect the pages of the app-->
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/data">Data</router-link>
      </div>
    </div>
  </nav>
</template>

<!--Export to be used elsewhere-->
<script>
export default {
  name: "Nav",
}
</script>

<!--Styling specific to this page, as it is scoped-->
<style scope>
.navbar {
  padding: 25px;
}
</style>