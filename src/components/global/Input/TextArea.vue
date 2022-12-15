<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    modelValue: String,
    placeholder: String
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-wrapper">
    <label :for="name">{{ label }}</label>
    <textarea
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col
  }

  textarea {
    @apply p-2 bg-transparent rounded-xl text-white
    outline-[1.5px] outline outline-white resize-none;
  }

  label{
    @apply font-urbanist-b text-md-p text-white
  }
</style>