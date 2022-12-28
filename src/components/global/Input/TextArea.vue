<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    modelValue: String,
    placeholder: String,
    colorSchema: {
      type: String
    },
  },
  emits: ['update:modelValue'],
  computed:{
    textAreaStyle(){
      const textColor = this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'
      const bgColor = this.$props.colorSchema === 'dark' ? 'white' : 'transparent'
      const outlineColor = this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'

      return {
        color: `${textColor}`,
        background: `${bgColor}`,
        outline: `1.5px solid ${outlineColor}`,
      }
    },
  }
}
</script>

<template>
  <div class="input-wrapper textarea" :style="{color: textAreaStyle.color}">
    <label :for="name">{{ label }}</label>
    <textarea
      :style="textAreaStyle"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col text-white
  }

  textarea {
    @apply py-2 px-3 bg-transparent rounded-xl
    outline-[1.5px] outline outline-white resize-none;
  }

  label{
    @apply font-urbanist-b text-md-p
  }
</style>