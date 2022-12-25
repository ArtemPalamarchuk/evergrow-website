<script setup lang="ts">
import Button from "@/components/global/Button.vue";
import TextImage from "@/components/global/TextImage.vue";
import {joinUs} from "@/assets/images";
import {joinUsContent} from '@/data';
import router from "@/router";

const {heading, text, buttonText} = joinUsContent
</script>

<template>
  <text-image :heading="heading" :mainText="text" :img="joinUs" :isReversed="true" contentBg="secondary">
    <template v-slot:button>
      <Button :text="buttonText" @click="router.push({path: '/contact-us'})"/>
    </template>
  </text-image>
</template>

<style scoped>
  button {
    @apply bg-white text-secondary w-fit
  }
</style>
