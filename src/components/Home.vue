<!--
Name: Gavin Elliott
Date: 5/17/2021
Assignment: FinalProject
-->
<template>
  <div>
    <br />
    <fieldset>
      <h1>Welcome to Open Weather</h1>
      <div>
        <p>
          Here at Open Weather, we strive to provide the best weather telling
          service possible, for no cost to you! If you enjoy our services, then
          be sure to check out our premium upgrades for an even better experience!
          Thank you!
        </p>
        <form>
          <fieldset>
            <legend>
              Please Enter Your City ZIP Code to Get Your Weather Info!
            </legend>
            <label for="zip">Enter needed ZIP:</label>
            <!-- Where the ZIP is entered -->
            <input
              type="text"
              id="zip"
              value=""
              title="Enter only a functioning zip (#####)"
            /><br /><br />
            <label for="F">Fahrenheit </label>
            <!-- Radio Buttons for Fahrenheit and Celsius -->
            <input
              type="radio"
              name="degree"
              id="F"
              value="Fahrenheit"
            /><br /><br />
            <label for="C">Celsius </label>
            <input
              type="radio"
              name="degree"
              id="C"
              value="Celsius"
            /><br /><br />
            <input type="button" value="Enter your choices" /><br />
          </fieldset>
        </form>
      </div>
    </fieldset>
  </div>
  <!-- I don't know why it starts in Kelvin -->
</template>

<!-- Export to wherever it's needed-->
<script>
export default {
  name: "Home",
  methods: {
    //Code for the Farenheit/Celsius
  }
};
</script>

<style>
fieldset {
  border: inset white 7px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 10px;
}
</style>