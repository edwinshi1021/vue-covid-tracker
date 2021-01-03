<template>
  <div class="col">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Enter Country"
      aria-label="Search"
      @input="setInput"
    />
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button " @click="fetchCountry">
        Search
      </button>
    </div>

    <div v-if="errorMsg === true" class="alert alert-danger mt-3" role="alert">
      Please enter a country!
    </div>

    <div v-if="country !== null" class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">{{ country.country }}</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Total Cases
            <span class="badge bg-danger">{{ country.cases }}</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Deaths
            <span class="badge bg-danger">{{ country.deaths }}</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Drecovered
            <span class="badge bg-danger">{{ country.recovered }}</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Today Cases
            <span class="badge bg-danger">{{ country.todayCases }}</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Today Deaths
            <span class="badge bg-danger">{{ country.todayDeaths }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Today Recovered
            <span class="badge bg-danger">{{ country.todayRecovered }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Cases Per Million
            <span class="badge bg-danger">{{
              country.casesPerOneMillion
            }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Deaths Per Million
            <span class="badge bg-danger">{{
              country.deathsPerOneMillion
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchCountry",
  data() {
    return {
      isShow: false,
      country: null,
      searchInput: "china",
      errorMsg: null,
    };
  },
  mounted() {
    this.fetchCountry();
  },
  methods: {
    setInput(e) {
      this.searchInput = e.target.value;
    },

    async fetchCountry() {
      if (this.searchInput === "") {
        this.errorMsg = true;
      } else {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/countries/${this.searchInput}?strict=true`
        );
        if (res.status === 200) {
          this.country = res.data;
          this.searchInput = "";
          this.errorMsg = false;
        }
      }
    },
  },
};
</script>

<style></style>
