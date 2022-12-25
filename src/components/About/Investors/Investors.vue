<script setup lang="ts">
import {xyz, congruent, firstRound, journey, garuda} from '@/assets/images'
import Person from '../Investors/Person.vue'
import {investorsContent} from "@/data";
</script>

<template>
  <section class="investors">
    <h2 class="title">Our investors</h2>
    <div class="images-container">
      <div class="image-container rounded-tl-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/3-5.33px)] sm-l:basis-1/5"><img :src="xyz" alt="xyz"></div>
      <div class="image-container basis-[calc(100%/3-5.33px)] rounded-lg sm-l:rounded-lg sm-l:basis-1/5"><img :src="congruent" alt="congruent"></div>
      <div class="image-container basis-[calc(100%/3-5.33px)] rounded-lg sm-l:rounded-lg sm-l:basis-1/5"><img :src="firstRound" alt="firstRound"></div>
      <div class="image-container rounded-bl-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/2-4px)] sm-l:basis-1/5"><img :src="garuda" alt="journey"></div>
      <div class="image-container rounded-br-[1.5rem] rounded-lg sm-l:rounded-lg basis-[calc(100%/2-4px)] sm-l:basis-1/5"><img :src="journey" alt="garuda"></div>
    </div>
    <div class="person-list">
      <Person v-for="person in investorsContent" :person="person"/>
    </div>
  </section>
</template>

<style scoped>
  .investors {
    @apply bg-white py-12 px-4
    lg:px-[120px] lg:py-24
    md:px-10 md:py-12
  }

  .title {
    @apply text-dark text-sm-h sm-l:text-md-h-tab md:text-lg-h text-center mb-8;
  }

  .images-container {
    @apply flex flex-wrap sm-l:flex-nowrap gap-2 md:gap-3 lg:gap-8 bg-beige mb-10 lg:mb-16 p-2 rounded-[2rem] rounded-tr-[0]
    lg:py-12 lg:px-[70px]
    md:py-7 md:px-8
    sm-l:py-5 sm-l:px-3
  }

  .image-container {
    @apply w-full h-[100px] flex items-center justify-center bg-white md:rounded-2xl ;
  }

  .person-list {
    @apply grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:ml-8
  }

  .person-list .card:nth-last-child(2) {
    @apply hidden md:block
  }
</style>
