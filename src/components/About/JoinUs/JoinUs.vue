<script setup lang="ts">
import Button from "@/components/global/Button.vue";
import TextImage from "@/components/global/TextImage.vue";
import {joinUs} from "@/assets/images";
import {joinUsContent} from '@/data';

const {heading, text, buttonText} = joinUsContent
</script>

<template>
  <text-image :heading="heading" :mainText="text" :img="joinUs" :isReversed="true" contentBg="secondary">
    <template v-slot:button>
      <a href="https://jobs.lever.co/Evergrow" target="_blank">
        <Button :text="buttonText"/>
      </a>
    </template>
  </text-image>
</template>

<style scoped>
  button {
    @apply bg-white text-secondary w-fit
  }
</style>
