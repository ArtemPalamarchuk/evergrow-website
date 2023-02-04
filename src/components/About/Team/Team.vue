<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import { teamContent } from "@/data";

const {heading, team, text} = teamContent
</script>

<template>
  <section class="full-width-filled bg-light-green py-12 px-4 lg:px-[120px] lg:py-24 md:px-10 md:py-16">
    <div class="max-w-[1440px] m-auto grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-x-5">
      <div class="w-[278px]">
        <h2 class="mb-7 text-sm-h sm-l:text-md-h-tab md:text-lg-h text-dark">{{ heading }}</h2>
        <p class="w-[380px] tablet-portrait:w-auto tablet-portrait:whitespace-nowrap mb-12">{{ text }}</p>
      </div>
      <div class="w-[278px]"/><div class="w-[278px]"/><div class="w-[278px]"/>
    </div>
    <div class="max-w-[1440px] m-auto grid grid-cols-2
     sm:flex sm:justify-center sm:flex-wrap gap-x-5 gap-y-6 sm:gap-y-10 md:gap-y-14">
      <ProfileCard v-for="{img, title, text, link} in team" :img="img" :title="title" :text="text" :link="link"/>
    </div>
  </section>
</template>
