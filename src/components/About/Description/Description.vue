<script setup lang="ts">
import {about_hero} from "@/assets/images";
import {aboutHeroContent} from "@/data";
const {heading, text, secondaryText} = aboutHeroContent

</script>

<template>
  <section class="full-width-filled bg-primary relative">
    <div class="max-w-[1440px] h-[470px] mx-auto">
      <div class="flex flex-col justify-center py-[58px] pl-[120px] pr-[78px]">
        <h2 class="max-w-[800px] text-sm-h mb-4 sm-l:text-md-h-tab md:text-lg-h text-white">{{ heading }}</h2>
        <p class="max-w-[800px] text-sm-p mb-[26px] md:text-lg-p text-white">{{ text }}</p>
        <p class="max-w-[800px] text-white">{{ secondaryText }}</p>
      </div>
      <img class="absolute right-0 top-0 max-h-[600px]" :src="about_hero" alt="image" loading="lazy">
    </div>
  </section>
</template>
