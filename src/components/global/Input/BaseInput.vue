<script>

export default {
  props: {
    name: String,
    label: String,
    type: {
      default: 'text',
    },
    modelValue: String,
    placeholder: String,
    colorSchema: {
      type: String
    },
    errMsg: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    styles() {
      const baseColor = this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'
      const bgColor = this.$props.colorSchema === 'dark' ? 'white' : 'transparent'

      return {
        outline: this.errMsg ? {outline: '1.5px solid #BC0017'} : {outline: `1.5px solid ${baseColor}`},
        text: {color: `${baseColor}`},
        background: {background: `${bgColor}`}
      }
    },
  }
}
</script>

<template>
  <div class="input-wrapper input" :style="styles.text">
    <label :for="name">{{ label }}</label>
    <input
      :style="[styles.outline, styles.background]"
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
    @apply flex flex-col
  }

  input {
    @apply py-2 px-3 bg-transparent rounded-xl
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