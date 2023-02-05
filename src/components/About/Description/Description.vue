<script setup lang="ts">
import {about_hero, about_hero_big, about_hero_small} from "@/assets/images";
import {aboutHeroContent} from "@/data";
const {heading, text, secondaryText} = aboutHeroContent

</script>

<template>
  <section class="sm:h-[950px] tablet-portrait:h-[700px] full-width-filled bg-primary px-4 pt-8 sm:p-0 ">
    <img class="hidden h-[850px] tablet-portrait:block object-cover absolute right-0 " :src="about_hero" alt="image" loading="lazy"/>
    <img class="hidden sm:block tablet-portrait:hidden object-cover absolute right-0 " :src="about_hero_big" alt="image" loading="lazy"/>
    <div class="max-w-[1440px] sm:h-[700px] flex flex-row m-auto">
      <div class="relative w-[600px] md:w-[800px]">
        <div class="sm:absolute
                    sm:-translate-y-1/2
                    sm:top-1/2 lg:top-1/2
                    tablet-portrait:top-[40%]
                    sm:left-[60px] md:left-[140px]">
          <h2 class="text-md-h-mob mb-6 sm:mb-8 sm:text-lg-h text-white">{{ heading }}</h2>
          <p class="text-sm-p mb-[26px] sm:text-lg-p text-white">{{ text }}</p>
          <p class="text-sm-p sm:text-lg-p text-white">{{ secondaryText }}</p>
        </div>
      </div>
    </div>
    <img class="sm:hidden mx-auto" :src="about_hero_small" alt="image" loading="lazy"/>
  </section>
</template>
