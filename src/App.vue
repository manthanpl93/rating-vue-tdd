<template>
  <div id="app">
    <Rating :maxStars="5" :initialGrade="2" />
  </div>
</template>

<script>
import Rating from "./components/Rating";
export default {
  name: "App",
  components: {
    Rating,
  },
};
</script>

<style>
</style>
