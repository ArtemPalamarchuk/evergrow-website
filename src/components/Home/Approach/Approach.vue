<script setup>
import TextImage from "@/components/global/TextImage.vue";
import Button from "@/components/global/Button.vue";
import { approach } from "@/assets/images";
import { approachContent } from "../data";

const {heading, text, secondaryText} = approachContent
</script>

<template>
  <text-image :heading="heading" :mainText="text" :secondaryText="secondaryText" :img="approach">
    <template v-slot:button>
      <Button text="Get in touch"/>
    </template>
  </text-image>
</template>

<style scoped>
  button {
    @apply py-[13px] bg-white text-secondary mt-[26px] w-fit
    sm:mt-[52px]
    md:mt-[26px]
  }

  button span {
    @apply text-secondary
  }
</style>
