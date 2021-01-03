<template>
  <div class="card m-3" style="width: 18rem;">
    <img :src="country.countryInfo.flag" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ country.country }}</h5>
      <p class="card-text">{{ country.cases }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
};
</script>

<style></style>
