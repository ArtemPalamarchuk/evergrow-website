<script setup lang="ts">
import {arrow} from "@/assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
}

const {img, title, text} = defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <img :src="img" alt="card">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <img :src="arrow" alt="arrow" class="icon">
    </div>
  </div>
</template>

<style scoped>
  .card {
    @apply rounded-bl-[2rem] rounded-t-[2rem] bg-primary
  }

  img[alt="card"] {
    @apply rounded-t-[2rem] w-full
  }

  .content {
    @apply flex flex-col justify-between p-4
    sm:min-h-[210px]
    md:min-h-0 md:flex-row md:px-8 md:py-[43px] md:justify-center md:items-center md:h-[150px]
  }

  h3 {
    @apply text-md-i text-white mb-1
    sm:text-sm-h
  }

  p {
    @apply text-xs-h-mob text-white
    sm:text-md-i
  }

  .content .icon {
    @apply w-8 h-8 mt-6 ml-auto cursor-pointer
    sm:w-10 sm:h-10
    md:mt-0
  }
</style>