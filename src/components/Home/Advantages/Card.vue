<script setup lang="ts">
import router from "@/router";
import Button from "@/components/global/Button.vue";
import { arrow } from "@/assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
  path: string,
}

const {img, title, text, path} = defineProps<CardProps>()
</script>

<template>
  <div class="max-w-[1000px] rounded-2xl mx-auto bg-white">
    <div class="flex">
      <div class="flex flex-col text-container py-8 pl-8">
        <h3 class="text-xmd-h">{{ title }}</h3>
        <p class="text-md-p mt-auto">{{ text }}</p>
        <Button
          class="py-[13px] px-[32px] mt-10 w-[190px] justify-between"
          text="Learn more"
          variant="black"
          @click="router.push({path})"
          :img="arrow"
        />
      </div>
      <img :src="img" alt="card" loading="lazy">
    </div>
  </div>
</template>

