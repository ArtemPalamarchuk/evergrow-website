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
  <div class="card w-fit">
    <img :src="img" alt="card" class="rounded-t-[2rem] max-h-[350px]">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <a :href="link" target="_blank" class="linkedIn">
        <img :src="linkedIn" alt="linkedIn" class="cursor-pointer float-right mt-3">
      </a>
    </div>
  </div>
</template>

<style scoped>
  .content {
    @apply flex flex-col relative bg-primary py-3 px-4 md:px-6 md:py-5 rounded-bl-[2rem] h-[120px] md:h-[134px];
  }

  h3 {
    @apply text-md-i sm:text-xs-h-tab md:text-xs-h text-white mb-1
  }

  p {
    @apply text-xs-h-mob sm:text-md-i text-white font-urbanist-sb
  }

  .linkedIn {
    @apply absolute right-4 bottom-3 md:right-6 md:bottom-5;
  }
</style>
