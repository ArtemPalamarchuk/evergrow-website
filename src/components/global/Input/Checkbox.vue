<script lang="ts">

export default {
  props: {
    name: String,
    label: String,
    modelValue: Boolean,
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-wrapper checkbox">
    <label class="container">
      <input
        v-model="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        type="checkbox"
        :name="name"
      >
      <span class="checkmark"></span>
    </label>
    <p class="label">{{ label }}</p>
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col text-dark
  }

  .container {
    @apply block relative cursor-pointer select-none;
  }

  .container input {
    @apply absolute opacity-0 cursor-pointer h-0 w-0;
  }

  .checkmark {
    @apply absolute top-1 h-4 w-4 rounded border-[1.3px] border-solid;
  }

  /*.container:hover input ~ .checkmark {*/
  /*  @apply bg-secondary-hover duration-300*/
  /*}*/

  .container input:checked ~ .checkmark {
    @apply bg-white
  }

  .checkmark:after {
    @apply content-[""] absolute hidden
  }

  .container input:checked ~ .checkmark:after {
    @apply block
  }

  .container .checkmark:after {
    @apply left-1 top-[2px] w-[5px] h-2 rotate-[35deg]
    border-secondary border-solid border-t-0 border-l-0 border-b-2 border-r-2;
  }

  .label {
    @apply ml-6
  }
</style>