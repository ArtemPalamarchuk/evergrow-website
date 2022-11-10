<script setup lang="ts">
interface ButtonProps {
  text: string,
  styles?: string,
}

const {text, styles = {}} = defineProps<ButtonProps>()
</script>

<template>
  <button :style="styles">
    {{ text }}
  </button>
</template>

<style scoped>
  button {
    @apply flex items-center rounded-md px-6 py-[6px] cursor-pointer
    bg-primary text-white text-lg-i whitespace-nowrap font-urbanist-b;
  }
</style>