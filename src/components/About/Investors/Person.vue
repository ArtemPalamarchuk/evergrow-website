<script setup lang="ts">
interface CardProps {
  person: {
    name: string,
    position: string,
    company: string,
  }
}

const {person} = defineProps<CardProps>()
const {name, position, company} = person
</script>

<template>
  <div class="card">
    <div class="text-container w-fit">
      <h3 class="text-white">{{ name }}</h3>
      <div class="flex flex-col sm-l:flex-row sm-l:flex-wrap">
        <p class="font-urbanist-sb text-light-green sm-l:mr-1">{{ position }}</p>
        <p class="font-urbanist-m text-light-green">{{ company }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h3 {
    @apply text-sm-p
        sm:text-xs-h-tab
        md:text-xs-h
  }

  p {
    @apply text-sm-l-p
        sm:text-sm-p
  }
</style>
