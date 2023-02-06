<script setup>
import {resourcesContent} from "@/data";
import VLazyImage from "@/components/global/VLazyImage.vue";

const {heading, resources} = resourcesContent
</script>

<template>
  <section class="max-w-[1200px] mx-4 md:mx-auto px-8 pt-4 pb-8 -translate-y-[147px] bg-white as-seen-shadow rounded-2xl">
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
    @apply flex flex-col sm:flex-row sm:justify-center mx-auto

    gap-x-2.5 md:gap-4
    gap-y-2;
  }

  .image-container img {
    @apply scale-[0.6] md:scale-[0.9] grayscale
  }

  .image-container {
    @apply flex items-center justify-center rounded-2xl
    h-[54px] sm:h-[64px] md:h-[81px]
    w-full md:w-[246px] lg:w-[300px];
    background: rgba(201, 205, 205, 0.12);
  }


</style>
