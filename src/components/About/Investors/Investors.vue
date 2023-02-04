<script setup lang="ts">
import { xyz, congruent, firstRound, journey, garuda } from '@/assets/images'
import Person from '../Investors/Person.vue'
import { investorsContent } from "@/data";
</script>

<template>
  <section class="investors full-width-filled">
    <div class="max-w-[1440px] mx-auto">
      <h2 class="title">Our investors</h2>
      <div class="images-container">
        <div class="image-container rounded-tl-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/3-5.33px)] sm-l:basis-1/5">
          <img :src="xyz" alt="xyz" loading="lazy">
        </div>
        <div class="image-container basis-[calc(100%/3-5.33px)] rounded-lg sm-l:rounded-lg sm-l:basis-1/5"><img
          :src="congruent" alt="congruent" loading="lazy">
        </div>
        <div class="image-container basis-[calc(100%/3-5.33px)] rounded-lg sm-l:rounded-lg sm-l:basis-1/5"><img
          :src="firstRound" alt="firstRound" loading="lazy">
        </div>
        <div class="image-container rounded-bl-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/2-4px)] sm-l:basis-1/5">
          <img :src="garuda" alt="journey" loading="lazy">
        </div>
        <div class="image-container rounded-br-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/2-4px)] sm-l:basis-1/5">
          <img :src="journey" alt="garuda" loading="lazy">
        </div>
      </div>
      <div class="person-list">
        <Person v-for="person in investorsContent" :person="person"/>
      </div>
    </div>
  </section>
  <div class="w-screen relative h-[250px] bg-primary-black left-1/2 -translate-x-1/2"/>
</template>

<style scoped>
.investors {
  @apply bg-primary-black py-12 px-4
  lg:px-[120px] lg:py-40
  md:px-10 md:py-12
}

.title {
  @apply text-white text-sm-h sm-l:text-md-h-tab md:text-lg-h text-center mb-8;
}

.images-container {
  @apply flex flex-wrap sm-l:flex-nowrap gap-2 md:gap-3 lg:gap-8 bg-[#1d3032] mb-10 lg:mb-16 px-2 py-5 rounded-2xl
   lg:px-[70px]
   md:px-8
   sm-l:px-3
}

.image-container {
  @apply w-full h-[100px] flex items-center justify-center md:rounded-2xl ;
}

.person-list {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:ml-[120px]
}

.person-list .card:nth-last-child(2) {
  @apply hidden md:block
}
</style>
