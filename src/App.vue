<template>
  <the-header />
  <div class="container">
    <div class="row mt-3">
      <search-country />
      <country-list />
    </div>
  </div>
</template>

<script>
import CountryList from "./components/CountryList.vue";
import TheHeader from "./components/TheHeader.vue";
import SearchCountry from "./components/SearchCountry.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    CountryList,
    SearchCountry,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  box-sizing: border-box;
}
</style>

//justify-content-end
