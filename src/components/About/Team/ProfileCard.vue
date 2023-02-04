<script setup lang="ts">
import {linkedIn} from "@/assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
  link: string,
}

const {img, title, text, link} = defineProps<CardProps>()
</script>

<template>
  <div>
    <img :src="img" alt="card" class="rounded-t-xl max-h-[350px]" loading="lazy">
    <div class="flex flex-col relative bg-dark py-3 px-4 md:px-6 md:py-5 rounded-b-xl h-[120px] md:h-[134px]">
      <div class="text-container">
        <h3 class="text-md-i sm:text-xs-h-tab md:text-xs-h text-white mb-1">{{ title }}</h3>
        <p class="text-xs-h-mob sm:text-md-i text-white font-urbanist-sb">{{ text }}</p>
      </div>
      <a :href="link" target="_blank" class="absolute right-4 bottom-3 md:right-6 md:bottom-5">
        <img :src="linkedIn" alt="linkedIn" class="cursor-pointer float-right mt-3" loading="lazy">
      </a>
    </div>
  </div>
</template>