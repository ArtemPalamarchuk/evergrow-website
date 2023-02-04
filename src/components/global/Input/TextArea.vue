<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    modelValue: String,
    placeholder: String,
    disabled: {
      default: false
    },
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-wrapper flex flex-col textarea">
    <label class="font-urbanist-b text-md-p" :for="name">{{ label }}</label>
    <textarea
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<style scoped>
  textarea {
    @apply h-11 py-2 pr-3 text-primary-black outline-none
    border-b-[1.5px] border-b-gray-400 focus:border-b-blue-900 resize-none;
  }
</style>