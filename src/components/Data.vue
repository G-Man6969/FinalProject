<template>
  <div>
    <br />
    <fieldset>
      <h1>Your Locations Weather</h1>
      <div v-for="out in weather" v-bind:key="out.id">
          <p>{{ out.name }}</p>
          <p>{{ out.temp }}</p>
      </div>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Data",
  data() {
    return {
      weather: [],
    };
  },
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip=65712&appid=c60d5366f859343d28974e5b14007e67"
      )
      .then((response) => {
        console.log(response);
        this.weather = response.data;
        this.weather.length = 2;
      });
  },
};
</script>

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