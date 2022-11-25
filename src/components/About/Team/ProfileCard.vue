<script setup lang="ts">
import {linkedIn} from "../../../assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
}

const {img, title, text} = defineProps<CardProps>()
</script>

<template>
  <div class="card w-fit">
    <img :src="img" alt="card" class="rounded-t-[2rem]">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <div>
        <img :src="linkedIn" alt="arrow" class="cursor-pointer float-right mt-3">
      </div>
    </div>
  </div>
</template>

<style scoped>

  .content {
    @apply flex flex-col bg-primary px-5 py-4 rounded-bl-[2rem] h-[134px] sm:h-auto;
  }

  h3 {
    @apply text-md-i sm:text-xs-h-tab md:text-xs-h text-white mb-1
  }

  p {
    @apply text-xs-h-mob sm:text-md-i text-white font-urbanist-sb
  }
</style>
