<script setup lang="ts">
import {arrow} from "../../../assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
}

const {img, title, text} = defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <img :src="img" alt="card" class="rounded-t-[2rem]">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <img :src="arrow" alt="arrow" class="cursor-pointer">
    </div>
  </div>
</template>

<style scoped>
  .card {

  }

  .content {
    @apply flex justify-between bg-primary px-8 py-10 rounded-bl-[2rem];
  }

  h3 {
    @apply text-sm-h text-white mb-2
  }

  p {
    @apply text-md-i text-white
  }
</style>