<script lang="ts">
import {caretDown} from "@/assets/images";

export default {
  props: ['optionList', 'modelValue', 'placeholder', 'label', 'name'],
  emits: ['update:modelValue'],
  data() {
    return {
      caretDown
    }
  }
}
</script>

<template>
  <div class="input-wrapper">
    <label :for="name" v-if="label">{{ label }}</label>
    <select :name="name" v-model="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option class="placeholder" value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option in optionList" :value="option">
        {{ option }}
      </option>
    </select>
    <img :src="caretDown" alt="arrow">
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply flex flex-col relative w-auto text-white
  }

  .input-wrapper select {
    @apply px-2 appearance-none bg-transparent
    rounded-xl outline-[1.5px] outline outline-white h-[35px]
  }

  .input-wrapper img {
    @apply absolute right-2 bottom-[10px] -translate-y-1/2
  }

  .input-wrapper label {
    @apply font-urbanist-b text-md-p
  }
</style>