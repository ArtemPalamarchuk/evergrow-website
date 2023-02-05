<script setup lang="ts">
import Button from "@/components/global/Button.vue";
import { approachContent } from "@/data";
import router from "@/router";
import { about_hero_big, about_hero_small} from "@/assets/images";

const { heading, paragraph, paragraph1, buttonText, img } = approachContent
</script>

<template>
  <section class="overflow-hidden mx-4 bg-primary approach-shadow z-1 rounded-2xl
                max-w-[1200px] lg:full-width-filled
                sm:h-[750px] md:h-[540px]
                 px-4 pt-8 sm:p-0
                -translate-y-[250px] -mb-[250px]">
    <img class="hidden h-[750px] md:h-[540px] sm:block  object-cover absolute right-0 " :src="about_hero_big" alt="image" loading="lazy"/>

    <div class="max-w-[1440px] sm:h-[750px] flex flex-row m-auto">
      <div class="relative w-[600px] md:w-[800px]">
        <div class="sm:absolute
                    sm:-translate-y-1/2
                    sm:top-[40%] md:top-[35%]
                    tablet-portrait:top-[40%]
                    sm:left-[60px]">
          <h2 class="text-md-h-mob mb-6 sm:max-w-[500px] sm:mb-8 sm:text-lg-h text-white">{{ heading }}</h2>
          <p class="text-sm-p mb-[26px] sm:text-lg-p text-white">{{ paragraph }}</p>
          <p class="text-sm-p sm:text-lg-p text-white">{{ paragraph1 }}</p>
          <Button
            class="py-[13px] px-[42px] mt-[40px]"
            :text="buttonText"
            variant="white"
            @click="router.push({path: '/contact-us'})"
          />
        </div>
      </div>
    </div>

    <img class="sm:hidden mr-auto scale-150 -translate-y-[75px] -mb-[50px]" :src="about_hero_small" alt="image" loading="lazy"/>

  </section>
</template>
