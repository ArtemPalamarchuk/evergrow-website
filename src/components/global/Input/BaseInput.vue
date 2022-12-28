<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    type: {
      default: 'text',
    },
    modelValue: String,
    placeholder: String,
    outlineColor: String,
    errMsg: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    outline() {
      return {
        style: this.errMsg ? {outline: '1.5px solid #BC0017'} : {outline: `1.5px solid ${this.$props.outlineColor}`}
      }
    }
  }
}
</script>

<template>
  <div class="input-wrapper input">
    <label :for="name">{{ label }}</label>
    <input
      :style="outline.style"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
    >
    <span v-if="errMsg" class="error-text">{{ errMsg }}</span>
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col text-white
  }

  input {
    @apply h-full p-2 bg-transparent rounded-xl
  }

  label {
    @apply font-urbanist-b text-md-p
  }

  .error-text {
    @apply text-error font-urbanist-m text-sm-l-p mt-1
  }
</style>