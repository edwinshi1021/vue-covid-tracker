<template>
  <div class="col">
    <h3>Total Cases:</h3>
    <ul class="list-group" v-if="isLoading === false && isLoading !== null">
      <li
        class="list-group-item"
        v-for="index in 10"
        :key="countries[index - 1].countryInfo._id"
      >
        <div class="row">
          <span class="col">{{ countries[index - 1].country }}</span>

          <span class="col"> {{ countries[index - 1].cases }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// import CountryCard from "./CountryCard.vue";
export default {
  name: "CountryList",
  components: {
    // CountryCard,
  },
  data() {
    return {
      countries: null,
      isLoading: null,
    };
  },
  mounted() {
    this.isLoading = true;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/countries?sort=cases"
      );
      if (res.status === 200) {
        this.countries = res.data;
        console.log(res.data);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
// col-lg-4
