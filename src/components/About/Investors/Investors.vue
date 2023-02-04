<script lang="ts">
import { xyz, congruent, firstRound, journey, garuda } from '@/assets/images'
import Person from '../Investors/Person.vue'
import { investorsContent } from "@/data";

export default {
  components: {Person},
  setup() {
    return {
      investorsContent,
      sponsors_images: [xyz, congruent, firstRound, journey, garuda]
    }
  }
}
</script>

<template>
  <section class="investors full-width-filled">
    <div class="max-w-[1440px] mx-auto">
      <h2 class="text-white text-sm-h sm-l:text-md-h-tab md:text-lg-h text-center mb-8">Our investors</h2>

      <div class="images-container">
        <div v-for="image in sponsors_images"
             class="w-full h-[100px] flex items-center justify-center basis-[calc(100%/3-5.33px)] sm-l:basis-1/5">
          <img :src="image" loading="lazy"/>
        </div>
      </div>

      <div class="person-list grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:ml-[120px]">
        <person v-for="person in investorsContent" :person="person"/>
      </div>
    </div>
  </section>
  <div class="w-screen relative h-[250px] bg-primary-black left-1/2 -translate-x-1/2"/>
</template>

<style scoped>
  .investors {
    @apply bg-primary-black
    px-4  md:px-10 lg:px-[120px]
    py-12 md:py-12 lg:py-40
  }

  .images-container {
    @apply flex bg-[#1d3032] justify-center
    flex-wrap sm-l:flex-nowrap
    gap-2 md:gap-3 lg:gap-8
    mb-10 lg:mb-16
    px-2 sm-l:px-3 md:px-8 lg:px-[70px]
    py-5
  }

  .person-list .card:nth-last-child(2) {
    @apply hidden md:block
  }
</style>
