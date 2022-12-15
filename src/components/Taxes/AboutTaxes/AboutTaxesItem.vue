<script setup lang="ts">

interface ItemProps {
  tax: {
    img: string,
    title: string,
    text: string,
  }
}

const {tax} = defineProps<ItemProps>()
const {img, title, text} = tax
</script>

<template>
  <div class="about-taxes-item">
    <img :src="img" alt="image">
    <div class="text-container">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
  .about-taxes-item {
    @apply flex flex-col items-center
    sm-l:flex-row sm-l:gap-x-3;
  }

  .about-taxes-item img {
    @apply rounded-t-[2rem] w-[150px] h-[150px] mx-5 my-6
    md:mx-16
  }

  .text-container {
    @apply flex flex-col text-center text-dark
    sm-l:text-left sm-l:justify-center sm-l:py-7
  }

  h3 {
    @apply text-sm-h mb-4;
  }

  p {
    @apply text-sm-p md:text-lg-p
  }
</style>
