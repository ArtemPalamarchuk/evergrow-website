<script setup>
  import { xyz, congruent, firstRound, journey, garuda } from '../../../assets/images'
  import Person from '../Investors/Person.vue'
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
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      <Person name="Andy Karetsky" position="President," company="Skyview Ventures"/>
      <Person name="Maddie Hall" position="Co-Founder," company="Living Carbon"/>
      <Person name="Justin Kan" position="Co-Founder," company="Twitch"/>
      <Person name="Sanjeev Kumar" position="Renewable Energy Executive" company=""/>
      <Person name="Erica Dorfman" position="SVP Of Capital Markets," company="Brex"/>
      <Person name="Michael Tannenbaum" position="COO," company="Brex"/>
      <Person name="Karen Karniol-Tambour" position="Co-CIO Sustainability," company="Bridgewater Associates"/>
      <Person name="Richard Matsui" position="CEO," company="Kwh Analytics"/>
      <Person name="Max Mullen" position="Co-Founder," company="Instacart"/>
      <Person name="Zach Perrett" position="CEO," company="Plaid"/>
      <Person name="Sierra Peterson" position="Managing Partner," company="Voyager"/>
      <Person name="Peter Reinhardt" position="CEO," company="Charm Industrial"/>
      <div class="hidden md:block"/>
      <Person name="Janice Tran" position="CEO," company="Kanin Energy"/>
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
</style>
