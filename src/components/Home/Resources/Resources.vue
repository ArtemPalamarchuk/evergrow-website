<script setup>
import { axios, canary, ctvc, solar } from "../../../assets/images";
</script>

<template>
  <section class="resources">
    <h2 class="title">As seen on:</h2>
    <div class="images-container">
      <div class="image-container"><img :src="axios" alt="axios"></div>
      <div class="image-container"><img :src="canary" alt="canary"></div>
      <div class="image-container"><img :src="ctvc" alt="ctvc"></div>
      <div class="image-container"><img :src="solar" alt="solar"></div>
    </div>
  </section>
</template>

<style scoped>
  .resources {
    @apply bg-[#F5F3EF] rounded-[2rem] rounded-br-[0] px-[70px] py-12 mb-10 mx-7;
  }

  .title {
    @apply text-dark text-md-h text-center mb-8;
  }

  .images-container {
    @apply flex gap-8;
  }

  .image-container {
    @apply w-full h-[100px] flex items-center justify-center bg-white rounded-[1rem];
  }
</style>