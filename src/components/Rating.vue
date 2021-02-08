<template>
  <div>
    <ul>
      <li
        :class="{ active: star <= initialGrade }"
        class="star"
        v-for="star in maxStars"
        :key="star"
      ></li>
    </ul>
    <div class="summary">{{ initialGrade }} of {{ maxStars }}</div>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number,
    },
    initialGrade: {
      type: Number,
    },
  },
};
</script>