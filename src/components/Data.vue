<!--
Name: Gavin Elliott
Date: 5/17/2021
Assignment: FinalProject
-->
<template>
  <div>
    <br />
    <fieldset>
      <h1>Your Locations Weather</h1>
      <!--Loop through the weather array and plop it here with the id as the key-->
      <div v-for="out in weather" v-bind:key="out.id">
          <!-- Grab the location name and the temp-->
          <p>{{ out.name }}</p>
          <p>{{ out.temp }}</p>
          <!-- Put picture here for specific weather-->
      </div>
    </fieldset>
  </div>
</template>

<script>
//Grab axios to make the get request
import axios from "axios";
//Export the data to where it needs to go
export default {
  name: "Data",
  data() {
    //Actually grab the array here so it can be filled
    return {
      weather: [],
    };
  },
  //Make the get request and fill the weather Array
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip={&mode=${}&appid=c60d5366f859343d28974e5b14007e67"
      )
      //Grab the get response
      .then((response) => {
        console.log(response);
        //fill the weather array
        this.weather = response.data;
        this.weather.length = 2;
      });
  },
};
</script>

<!--Styling for the page-->
<style>
#Data {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background: black;
}
body {
  background: black;
}
fieldset {
  border: inset white 5px;
}
</style>