<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    type: {
      default: 'text',
    },
    modelValue: String,
    placeholder: String
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-wrapper">
    <label :for="name">{{ label }}</label>
    <input
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
    >
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col
  }

  input {
    @apply h-full p-2 bg-transparent rounded-xl text-white
    outline-[1.5px] outline outline-white;
  }

  label {
    @apply font-urbanist-b text-md-p text-white
  }
</style>