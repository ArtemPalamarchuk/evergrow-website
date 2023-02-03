<script setup lang="ts">
import Button from "@/components/global/Button.vue";
import VLazyImage from "@/components/global/VLazyImage.vue";
import { approachContent } from "@/data";
import router from "@/router";

const { heading, paragraph, paragraph1, buttonText, img } = approachContent
</script>

<template>
  <section class="approach-shadow flex bg-primary w-[1200px] mx-auto rounded-2xl
                  relative -translate-y-[250px] -mb-[250px] z-1">
    <div class="py-[60px] pl-[66px] w-[70%]">
      <h2 class="text-white text-lg-h mb-[23px] max-w-[513px]">{{ heading }}</h2>
      <div class="max-w-[710px]">
        <p class="text-white text-lg-p">{{ paragraph }}</p>
        <p class="text-white text-lg-p">{{ paragraph1 }}</p>
      </div>
      <Button
        class="py-[13px] px-[42px] mt-[40px]"
        :text="buttonText"
        variant="white"
        @click="router.push({path: '/contact-us'})"
      />
    </div>
    <div class="absolute right-0">
      <v-lazy-image :src="img"/>
    </div>

  </section>
</template>
