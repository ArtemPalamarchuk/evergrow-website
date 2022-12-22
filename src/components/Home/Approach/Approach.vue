<script setup>
import TextImage from "@/components/global/TextImage.vue";
import Button from "@/components/global/Button.vue";
import {approach} from "@/assets/images";
import {approachContent} from "@/data";
import router from "@/router";

const {heading, text, buttonText} = approachContent
</script>

<template>
  <text-image :heading="heading" :mainText="text" :img="approach" :isReversed="true" contentBg="secondary">
    <template v-slot:button>
      <Button :text="buttonText" @click="router.push({path: '/about'})"/>
    </template>
  </text-image>
</template>

<style scoped>
  button {
    @apply py-[13px] bg-white text-secondary mt-[26px] w-fit
    sm:mt-[52px]
    md:mt-[26px]
  }
</style>
