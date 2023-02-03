<script setup>
import {advantagesContent} from "@/data";
import { solar } from "@/assets/images";
import VLazyImage from "@/components/global/VLazyImage.vue";
import Card from "./Card.vue";

const {heading, text, cards} = advantagesContent
</script>

<template>
  <section class="px-[120px]">
    <div class="flex flex-col max-w-[790px] gap-8 mx-auto text-center">
      <h2 class="text-xmd-h">{{ heading }}</h2>
      <p class="text-md-p">{{ text }}</p>
    </div>

    <div class="w-screen relative left-1/2 -translate-x-1/2 mt-[130px] -mb-[5px]">
      <v-lazy-image class="w-full" :src="solar"/>
    </div>

    <div class="py-[160px] bg-dark w-screen relative left-1/2 -translate-x-1/2">
      <div class="flex flex-col gap-y-10">
        <Card v-for="{img, title, text, path} in cards" :img="img" :title="title" :text="text" :path="path"/>
      </div>
    </div>

    <div class="w-screen relative h-[250px] bg-dark left-1/2 -translate-x-1/2"/>
  </section>
</template>
