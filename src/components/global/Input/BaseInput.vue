<script>

export default {
  props: {
    name: String,
    label: String,
    type: {
      default: 'text',
    },
    disabled: {
      default: false
    },
    modelValue: String,
    placeholder: String,
    errMsg: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-wrapper input">
    <label :for="name">{{ label }}</label>
    <input
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
    >
    <span v-if="errMsg" class="error-text">{{ errMsg }}</span>
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col
  }

  input {
    @apply py-2 pr-3 bg-transparent border-b-[1.5px] duration-300
    border-b-gray-400 focus:border-b-blue-900 outline-none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  label {
    @apply font-urbanist-b text-md-p
  }

  .error-text {
    @apply text-error font-urbanist-m text-sm-l-p mt-1
  }
</style>