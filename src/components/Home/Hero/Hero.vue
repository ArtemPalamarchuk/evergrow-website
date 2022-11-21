<script setup>
import Button from "@/components/global/Button.vue";
import { hero } from "@/assets/images";
import { heroContent } from "../data";

const {heading, text} = heroContent
</script>

<template>
  <section class="hero">
    <div class="text-content">
      <h1>{{ heading }}</h1>
      <p>{{ text }}</p>
      <Button text="Get Started"/>
    </div>
    <div class="img-wrap">
      <img :src="hero" alt="">
    </div>
  </section>
</template>

<style scoped>
  .hero {
    @apply w-full flex flex-col bg-light-green
    sm:pb-8
    md:pb-0 md:flex-row md:items-center
  }

  .text-content {
    @apply py-12 pl-4 pr-8 text-dark
    sm:pt-[72px] sm:pb-6 sm:pr-0 sm:max-w-[588px]
    md:pl-0 md:py-[147px] md:max-w-[483px] md:ml-[120px]
  }

  .text-content h1 {
    @apply text-sm-h mb-1.5
    sm:text-lg-h
    md:mb-8
  }

  .text-content p {
    @apply text-md-i mb-8
    sm:text-md-p
    md:mb-12
  }

  .img-wrap {
    @apply text-white w-[507px] h-[244px] left-1/2 relative -translate-x-1/2 top-5
    sm:w-[753px] sm:h-[353px] sm:top-0
    md:w-[940px] md:h-[453px] md:flex md:translate-x-0 md:-left-[70px] md:translate-y-[10%]
  }

  .text-content button {
    @apply bg-secondary py-[13px] px-[56px]
  }
</style>
