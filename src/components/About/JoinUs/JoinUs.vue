<script setup>
import Button from "@/components/global/Button.vue";
import TextImage from "@/components/global/TextImage.vue";
import { joinUs } from "@/assets/images";
import { joinUsContent } from '@/data';

const {heading, text} = joinUsContent
</script>

<template>
  <text-image :heading="heading" :mainText="text" :img="joinUs">
    <template v-slot:button>
      <Button text="Get in touch"/>
    </template>
  </text-image>
</template>

<style scoped>

h2 {
  @apply text-white text-lg-h mb-4
}

p {
  @apply text-white text-md-p mb-16
}

button {
  @apply px-6 py-[10px] bg-white text-secondary w-fit
}

button span{
  @apply text-secondary
}

img {
  @apply w-1/2
}
</style>
