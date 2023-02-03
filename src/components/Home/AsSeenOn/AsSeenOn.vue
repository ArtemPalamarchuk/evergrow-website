<script setup>
import {resourcesContent} from "@/data";
import VLazyImage from "@/components/global/VLazyImage.vue";

const {heading, resources} = resourcesContent
</script>

<template>
  <section class="max-w-[1200px] w-full mx-auto pt-4 pb-8 -translate-y-[147px] bg-white as-seen-shadow">
    <h2 class="title">{{ heading }}</h2>
    <div class="images-container">
      <div v-for="item in resources" class="image-container">
        <v-lazy-image :src="item.source"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .title {
    @apply text-sm-h-tab text-center mb-2
    sm:mb-4
    md:text-md-h md:mb-8
  }

  .images-container {
    @apply grid gap-y-2 gap-x-2.5 px-4 grid-cols-2
    sm:grid-cols-4
    md:gap-4 md:mx-auto md:w-fit;
  }

  .image-container img {
    @apply scale-[0.6] md:scale-[0.9] grayscale
  }

  .image-container {
    @apply h-[54px] max-w-[246px] flex items-center justify-center rounded-[1rem]
    sm:h-[64px]
    md:h-[81px] md:w-[300px];
    background: rgba(201, 205, 205, 0.12);
  }

  .image-container:last-child {
    @apply col-span-2 sm:col-span-1
  }
</style>
