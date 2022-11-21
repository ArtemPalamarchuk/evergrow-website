<script setup>
import Card from "./Card.vue";
import { advantagesContent } from "../data";

const {heading, text, cards} = advantagesContent
</script>

<template>
  <section class="advantages">
    <div class="text-content">
      <h2>{{ heading }}</h2>
      <p>{{ text }}</p>
    </div>

    <div class="cards">
      <Card v-for="{img, title, text} in cards" :img="img" :title="title" :text="text"/>
    </div>
  </section>
</template>

<style scoped>
  .advantages {
    @apply my-12 px-4
    md:my-[104px] md:px-[120px]
  }

  .text-content {
    @apply flex flex-col gap-4 text-dark mb-12
    sm:gap-6
    md:flex-row
  }

  .text-content h2 {
    @apply text-sm-h-mob
    sm:text-md-h-tab sm:max-w-[550px]
    md:text-lg-h md:w-1/2 md:max-w-full
  }

  .text-content p {
    @apply text-md-i
    sm:text-md-p sm:max-w-[610px]
    md:w-1/2 md:max-w-full
  }

  .cards {
    @apply grid gap-6 mb-16
    sm:grid-cols-2 sm:gap-x-4
    md:gap-x-6;
  }

  .advantages .cards:last-child {
    @apply mb-0
  }
</style>