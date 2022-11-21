<script setup lang="ts">
interface ButtonProps {
  text: string,
  styles?: string,
}

const {text, styles = {}} = defineProps<ButtonProps>()
</script>

<template>
  <button :class="styles">
    {{ text }}
  </button>
</template>

<style scoped>
  button {
    @apply flex items-center rounded-md py-3 px-6 cursor-pointer bg-primary text-md-i text-white whitespace-nowrap
  }
</style>