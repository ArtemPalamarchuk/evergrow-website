<script setup lang="ts">

interface CardProps {
  name: string,
  title: string,
  subtitle: string,
}

const {name, title, subtitle} = defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <div class="text-container w-fit">
      <h3>{{ name }}</h3>
      <p>{{ title }}</p>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>

h3 {
  @apply text-xs-h text-secondary mb-1
}

p {
  @apply text-md-i text-dark font-urbanist-sb
}
</style>
