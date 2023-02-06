<script setup>
import {advantagesContent} from "@/data";
import { solar } from "@/assets/images";
import VLazyImage from "@/components/global/VLazyImage.vue";
import Card from "./Card.vue";

const {heading, text, cards} = advantagesContent
</script>

<template>
  <section class="px-4">
    <div class="flex flex-col max-w-[790px] gap-8 mx-auto text-center">
      <h2 class="text-sm-h sm-l:text-md-h-tab md:text-xmd-h">{{ heading }}</h2>
      <p class="text-sm-p md:text-lg-p">{{ text }}</p>
    </div>

    <div class="full-width-filled mt-[130px] -mb-[5px]">
      <v-lazy-image class="w-full" :src="solar"/>
    </div>

    <div class="full-width-filled py-20 sm:py-40 bg-dark">
      <div class="flex flex-col gap-y-10">
        <Card v-for="{img, title, text, path} in cards" :img="img" :title="title" :text="text" :path="path"/>
      </div>
    </div>

    <div class="full-width-filled h-[250px] bg-dark"/>
  </section>
</template>
