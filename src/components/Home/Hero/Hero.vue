<script setup>
import Button from "@/components/global/Button.vue";
import { hero, hero_mini } from "@/assets/images";
import { heroContent } from "@/data";
import VLazyImage from "@/components/global/VLazyImage.vue";

const { heading, subHeading, text, buttonTitle } = heroContent
</script>

<template>
  <section class="full-width-filled bg-light-green">
    <div class="flex flex-col md:flex-row
                mx-auto max-w-[1200px]
                pl-4 md:pl-[60px] lg:pl-0">
      <div class="max-w-[350px] sm:max-w-[483px] justify-self-center
                  md:pb-[228px] pb-10
                  md:pt-[72px] pt-10">
        <h1 class="text-md-h-mob sm:text-lg-h">{{ heading }}</h1>
        <h2 class="text-md-h-mob sm:text-lg-h font-urbanist-m mt-1 mb-4 sm:mb-6 md:mb-8">{{ subHeading }}</h2>
        <p class="text-md-i mb-8 sm:text-md-p md:mb-12 md:text-lg-p">{{ text }}</p>
        <a href="https://app.evergrow.com/quote" target="_blank">
          <Button class="px-10 py-2.5" variant="black" :text="buttonTitle"/>
        </a>
      </div>
      <div class="self-center	lg:self-baseline
                  sm:-translate-y-[100px] md:translate-y-0">
        <v-lazy-image class="hidden md:block" :src="hero"/>
        <v-lazy-image class="md:hidden" :src="hero_mini"/>
      </div>
    </div>
  </section>
</template>