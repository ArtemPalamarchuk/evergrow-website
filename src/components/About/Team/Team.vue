<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import {teamContent} from "@/data";

const {heading, team} = teamContent
</script>

<template>
  <section class="team">
    <div class="text-content">
      <h2>{{heading}}</h2>
    </div>
    <div class="max-w-[1440px] m-auto grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-x-5 gap-y-6 sm:gap-y-10 md:gap-y-14">
      <ProfileCard v-for="{img, title, text, link} in team" :img="img" :title="title" :text="text" :link="link"/>
    </div>
  </section>
</template>

<style scoped>
  .team {
    @apply bg-light-green py-12 px-4 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden justify-center
    lg:px-[120px] lg:py-24
    md:px-10 md:py-16
  }

  .text-content {
    @apply flex justify-center mb-6 sm-l:mb-12;
  }

  .text-content h2 {
    @apply text-sm-h sm-l:text-md-h-tab md:text-lg-h text-dark;
  }
</style>
