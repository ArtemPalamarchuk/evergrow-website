<script setup lang="ts">
import {arrow} from "@/assets/images";
import router from "@/router";

interface CardProps {
  img: string,
  title: string,
  text: string,
  path: string,
}

const {img, title, text, path} = defineProps<CardProps>()
</script>

<template>
  <div class="card" @click="router.push({path})">
    <img :src="img" alt="card">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <div class="icon"><img :src="arrow" alt="arrow" class="arrow"></div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    @apply rounded-bl-[2rem] rounded-t-[2rem] bg-primary cursor-pointer duration-500
  }

  .card:hover {
    @apply bg-[#036D61];
  }

  .card:hover .content .icon {
    @apply bg-[#F18060];
  }

  img[alt="card"] {
    @apply rounded-t-[2rem] w-full
  }

  .content {
    @apply p-4 h-[134px] relative
    sm:min-h-[194px]
    md:px-8 md:py-8 md:items-center md:h-[134px]
  }

  h3 {
    @apply text-md-i text-white mb-1
    sm:text-sm-h sm:mb-2
    md:max-w-[80%]
  }

  p {
    @apply text-xs-h-mob text-white
    sm:text-md-i
    md:max-w-[90%]
  }

  .content .icon {
    @apply absolute w-8 h-8 right-4 bottom-4 bg-[#F0F7F6] rounded-[30px] flex items-center justify-center duration-500
    sm:w-10 sm:h-10
  }

  .arrow {
    @apply w-4 h-[14px] sm:w-[21px] sm:h-[18px]
  }
</style>
