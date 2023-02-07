<script setup>
import { resourcesContent } from "@/data";
import VLazyImage from "@/components/global/VLazyImage.vue";

const { heading, resources } = resourcesContent
</script>

<template>
  <section class="lg:w-[1200px] bg-white as-seen-shadow rounded-2xl
                  mx-4 md:mx-auto
                  px-2.5 py-4
                  -translate-y-[40px] sm:-translate-y-[147px]">
    <h2 class="text-center text-lg-i sm:text-sm-h">{{ heading }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4
                my-8 mx-auto
                sm:px-16
                gap-2.5 sm:gap-4">
      <v-lazy-image
        v-for="item in resources" :src="item.source"
        class="w-full max-h-[84px] max-w-[300px] object-none
               md:w-[200px] lg:w-[246px]
               sm-l:justify-self-center"/>
    </div>
  </section>
</template>
