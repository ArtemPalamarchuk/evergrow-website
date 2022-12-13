<script setup>
import Button from "@/components/global/Button.vue";
import {taxesHeroContent} from '@/components/Home/data';
import {snow} from "@/assets/images";

const {heading, text} = taxesHeroContent
</script>

<template>
  <section class="description">
    <div class="text-content">
      <h2>{{heading}}</h2>
      <p>{{text}}</p>
      <button class="">Get Started</button>
    </div>
    <img :src="snow" alt="snow">
  </section>
</template>

<style scoped>
  .description {
    @apply flex flex-col lg:flex-row
  }

  .text-content {
    @apply bg-light-green px-4 py-6 flex flex-col justify-center
    sm:pr-[78px]
    lg:py-[58px] lg:pl-[120px] lg:pr-[78px]
    lg:w-1/2
  }

  h2 {
    @apply text-sm-h-mob mb-4
    sm:text-md-h-tab
    md:text-lg-h
  }

  p {
    @apply text-md-i mb-[26px]
    sm:text-md-p
  }

  button {
    @apply px-4 sm-l:px-14 py-2 sm-l:py-3 bg-secondary text-white w-fit rounded-md
  }

  img {
    @apply object-cover max-h-[550px] lg:max-h-full
    lg:w-1/2
  }
</style>
