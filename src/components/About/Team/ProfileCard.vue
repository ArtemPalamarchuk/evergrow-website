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
  <div class="card">
    <img :src="img" alt="card" class="rounded-t-[2rem]">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <div>
        <img :src="linkedIn" alt="arrow" class="cursor-pointer float-right">
      </div>
    </div>
  </div>
</template>

<style scoped>

  .content {
    @apply flex flex-col bg-primary px-6 py-5 rounded-bl-[2rem];
  }

  h3 {
    @apply text-xs-h text-white mb-1
  }

  p {
    @apply text-md-i text-white font-urbanist-sb
  }
</style>
