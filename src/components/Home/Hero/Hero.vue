<script setup>
import Button from "@/components/global/Button.vue";
import {hero} from "@/assets/images";
import {heroContent} from "@/data";
import router from "@/router";

const {heading, subHeading, text, buttonTitle} = heroContent
</script>

<template>
  <section class="hero">
    <div class="text-content">
      <h1>{{ heading }}</h1>
      <h2>{{ subHeading }}</h2>
      <p>{{ text }}</p>
      <Button :text="buttonTitle" @click="router.push({path: '/contact-us'})"/>
    </div>
    <div class="img-wrap">
      <img :src="hero" alt="hero" loading="lazy">
    </div>
  </section>
</template>

<style scoped>
  .hero {
    @apply w-full flex flex-col bg-light-green w-screen relative left-1/2 -translate-x-1/2 overflow-hidden justify-center
    sm:pb-8
    md:pb-0 md:flex-row md:items-center
  }

  .text-content {
    @apply py-12 pl-4 pr-8 text-dark
    sm:pt-[72px] sm:pb-6 sm:pr-0 sm:max-w-[588px]
    md:pl-0 md:py-[147px] md:max-w-[483px] md:ml-[120px]
  }

  .text-content h1, .text-content h2 {
    @apply text-sm-h
    sm:text-lg-h
  }

  .text-content h2 {
    @apply font-urbanist-m mt-1 mb-4
    sm:mb-6
    md:mb-8
  }

  .text-content p {
    @apply text-md-i mb-8
    sm:text-md-p
    md:mb-12 md:text-lg-p
  }

  .text-content button {
    @apply bg-secondary  px-10 py-2.5
    sm-l:px-[56px]
  }

  .img-wrap {
    @apply text-white w-[507px] h-[244px] left-1/2 relative -translate-x-1/2 top-5
    sm:w-[753px] sm:h-[353px] sm:top-0
    md:w-[940px] md:h-[453px] md:flex md:translate-x-0 md:-left-[70px] md:translate-y-[10%]
  }
</style>
