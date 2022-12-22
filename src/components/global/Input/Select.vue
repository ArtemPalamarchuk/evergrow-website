<script>
import {caretDown} from "@/assets/images";

export default {
  props: ['optionList', 'value', 'placeholder', 'label'],
  emits: ['updateValue'],
  data() {
    return {
      isActiveSelectMenu: false,
      caretDown
    }
  },
  methods: {
    toggleDropdown() {
      this.isActiveSelectMenu = !this.isActiveSelectMenu
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActiveSelectMenu = false
      }
    },
    itemHandler(option) {
      this.isActiveSelectMenu = false
      this.$emit('updateValue', option)
    }
  },
  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close)
  }
}
</script>

<template>
  <div class="input-wrapper select" @click="this.toggleDropdown">
    <p class="label">{{ label }}</p>
    <div class="input-select">
      <p class="placeholder">{{ value || placeholder }}</p>
      <img :src="caretDown" alt="arrow" :style="{transform: isActiveSelectMenu ? 'rotate(180deg)' : 'rotate(0)' }">

      <ul v-if="isActiveSelectMenu" class="options-menu">
        <li v-for="option in optionList"
            @click="itemHandler(option)"
            :style="{backgroundColor: value === option ? '#E6F0ED' : 'none' }"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply select-none
  }

  .input-wrapper .label {
    @apply font-urbanist-b text-md-p
  }

  .input-wrapper .input-select {
    @apply w-full rounded-xl bg-white text-dark flex flex-row items-center justify-between relative pr-[18px];
  }

  .input-wrapper .input-select .placeholder {
    @apply pl-3 py-[4.5px] whitespace-nowrap overflow-hidden text-dark
  }

  .options-menu {
    @apply absolute w-full bg-white top-[44px] rounded-xl p-1;
    box-shadow: 0 30px 44px -8px rgb(13 43 46 / 30%);
  }

  .options-menu li {
    @apply p-2 rounded-xl font-urbanist-m text-dark
  }

  .options-menu li:hover {
    @apply bg-light-green cursor-pointer;
  }

  .input-wrapper .input-select img {
    @apply w-3 duration-300 ml-2
  }
</style>