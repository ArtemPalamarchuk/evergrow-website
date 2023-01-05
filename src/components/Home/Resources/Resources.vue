<script setup>
import {resourcesContent} from "@/data";

const {heading, resources} = resourcesContent
</script>

<template>
  <section class="resources">
    <h2 class="title">{{ heading }}</h2>
    <div class="images-container">
      <div v-for="item in resources" class="image-container">
        <img :src="item.source" :alt="item.source"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .resources {
    @apply bg-beige pt-4 pb-3 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden justify-center
    sm:py-7
    md:py-12
  }

  .title {
    @apply text-dark text-md-p text-center mb-2
    sm:text-sm-h-tab sm:mb-4
    md:text-md-h md:mb-8
  }

  .images-container {
    @apply grid gap-y-2 gap-x-2.5 px-4 grid-cols-2
    sm:grid-cols-3
    md:gap-[50px] md:mx-auto md:w-fit
  }

  .image-container img {
    @apply scale-[0.6] md:scale-[0.9] grayscale
  }

  .image-container {
    @apply h-[54px] flex items-center justify-center bg-white/[.7] rounded-[1rem]
    sm:h-[64px]
    md:h-[81px] md:w-[300px]
  }

  .image-container:last-child {
    @apply col-span-2 sm:col-span-1
  }
</style>
