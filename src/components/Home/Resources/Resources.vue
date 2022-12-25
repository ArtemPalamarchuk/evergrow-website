<script setup>
import {finExtra, techCrunch, impactAlpha} from "@/assets/images";
import {resourcesContent} from "@/data";

const {heading} = resourcesContent
const resources = [
  {source: finExtra, href: 'https://www.finextra.com/pressarticle/90221/carbon-offtake-company-evergrow-lands-7-million-seed-round'},
  {source: techCrunch, href: 'https://techcrunch.com/2021/11/10/evergrow-climate-fintech-7m-seed-round-from-xyz-capital-congruent-capital-firstround/?guccounter=1'},
  {source: impactAlpha, href: 'https://impactalpha.com/evergrow-raises-7-million-to-provide-offtake-and-funding-for-carbon-reduction-projects/'},
]
</script>

<template>
  <section class="resources">
    <h2 class="title">{{ heading }}</h2>
    <div class="images-container">
      <a v-for="item in resources" :href="item.href" target="_blank" class="image-container">
        <img :src="item.source" :alt="item.source"/>
      </a>
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
    @apply grid gap-y-2 gap-x-2.5 px-4 grid-cols-2 cursor-pointer
    sm:grid-cols-3
    md:gap-[50px] md:mx-auto md:w-fit
  }

  .image-container img {
    @apply scale-[0.6] md:scale-[0.9]
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
