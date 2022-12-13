<script setup lang="ts">

interface ItemProps {
  img: string,
  title: string,
  text: string,
}

const {img, title, text} = defineProps<ItemProps>()
</script>

<template>
  <div class="about-taxes-item">
    <img :src="img" alt="image" class="rounded-t-[2rem]">
    <div class="w-[75%]">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.about-taxes-item {
  @apply flex justify-between gap-x-24 py-8;
}

h3 {
  @apply text-sm-h mb-4 font-urbanist-b;
}

p {
  @apply text-lg-p;
}

</style>
