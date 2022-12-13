<script setup lang="ts">

interface CardProps {
  name: string,
  position: string,
  company: string,
}

const {name, position, company} = defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <div class="text-container w-fit">
      <h3>{{ name }}</h3>
      <div class="flex flex-col sm-l:flex-row sm-l:flex-wrap">
        <p class="font-urbanist-b sm-l:mr-1">{{ position }}</p>
        <p class="font-urbanist-sb">{{ company }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

h3 {
  @apply text-xs-h text-secondary mb-1
}

p {
  @apply text-md-i text-dark
}
</style>
