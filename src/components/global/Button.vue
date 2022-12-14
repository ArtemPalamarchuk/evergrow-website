<script setup lang="ts">
interface ButtonProps {
  text: string,
}

const {text} = defineProps<ButtonProps>()
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
  button {
    @apply flex items-center rounded-md py-1.5 px-6 cursor-pointer bg-primary text-md-i text-white whitespace-nowrap
    sm-l:text-lg-i
  }
</style>