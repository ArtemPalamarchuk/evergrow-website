<script setup>
import { axios, canary, ctvc, solar } from "@/assets/images";
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
    @apply bg-beige pt-4 pb-3
    sm:py-7
    md:py-12
  }

  .title {
    @apply text-dark text-md-p text-center mb-2
    sm:text-sm-h-tab sm:mb-4
    md:text-md-h
  }

  .images-container {
    @apply grid gap-y-2 gap-x-2.5 px-4 grid-cols-2
    sm:grid-cols-4
    md:gap-[50px] md:mx-auto md:w-fit
  }

  .image-container img {
    @apply scale-[0.6] md:scale-[0.9]
  }

  .image-container {
    @apply h-[54px] flex items-center justify-center bg-white rounded-[1rem]
    sm:h-[64px]
    md:h-[81px] md:w-[211px]
  }
</style>
