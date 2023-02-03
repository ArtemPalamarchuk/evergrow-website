<script setup>
import Button from "@/components/global/Button.vue";
import {hero} from "@/assets/images";
import {heroContent} from "@/data";
import VLazyImage from "@/components/global/VLazyImage.vue";

const {heading, subHeading, text, buttonTitle} = heroContent
</script>

<template>
  <section class="full-width-filled bg-light-green">
    <div class="flex mx-auto max-w-[1200px]">
      <div class="text-content justify-self-center w-1/2">
        <h1>{{ heading }}</h1>
        <h2>{{ subHeading }}</h2>
        <p>{{ text }}</p>
        <a href="https://app.evergrow.com/quote" target="_blank">
          <Button class="px-10 py-2.5" variant="black" :text="buttonTitle"/>
        </a>
      </div>

      <div>
        <v-lazy-image :src="hero"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .text-content {
    @apply pb-[228px] pt-[72px] max-w-[483px]
  }

  .text-content h1, .text-content h2 {
    @apply text-sm-h sm:text-lg-h
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
</style>
