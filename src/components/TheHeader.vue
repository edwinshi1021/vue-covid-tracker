<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand p-2">Covid Tracker</a>
      <span class="text-white p-2">{{ date }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      date: new Date().toString().slice(0, 15),
    };
  },
};
</script>

<style></style>
