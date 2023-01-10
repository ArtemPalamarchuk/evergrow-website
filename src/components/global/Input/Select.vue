<script>
export default {
  props: {
    value: String,
    placeholder: String,
    label: String,
    colorSchema: {
      type: String
    },
    disabled: {
      default: false
    },
  },
  emits: ['updateValue'],
  data() {
    return {
      isActiveSelectMenu: false,
      optionList: [
        'Saving money on taxes',
        "Monetizing my tax credits",
        "Helping my clients with tax credits",
        "Something else"
      ]
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
  },
  computed: {
    styles() {
      const baseColor = this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'
      const bgColor = this.$props.colorSchema === 'dark' ? 'white' : 'transparent'
      const imgColor = this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'
      const isDisabled = this.$props.disabled ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}

      return {
        outline: {outline: `1.5px solid ${baseColor}`},
        text: {color: `${baseColor}`},
        background: {background: `${bgColor}`},
        imgColor,
        isDisabled
      }
    },
  },
}
</script>

<template>
  <div class="input-wrapper select" :style="styles.text">
    <p class="label">{{ label }}</p>
    <div
      class="input-select"
      @click="this.toggleDropdown"
      :style="[styles.outline, styles.background, styles.isDisabled]"
    >
      <p class="placeholder">{{ value || placeholder }}</p>

      <div class="arrow-container" :style="{transform: isActiveSelectMenu ? 'rotate(180deg)' : 'rotate(0)' }">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-2.18557e-07 0.5L5 5.5L10 0.5L-2.18557e-07 0.5Z" :fill="styles.imgColor"/>
        </svg>
      </div>

      <ul v-if="isActiveSelectMenu" class="options-menu">
        <li v-for="option in optionList" @click="itemHandler(option)" :style="{backgroundColor: value === option ? '#E6F0ED' : 'none' }">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .input-wrapper {
    @apply select-none cursor-pointer flex flex-col justify-between
  }

  .input-wrapper .label {
    @apply font-urbanist-b text-md-p
  }

  .input-wrapper .input-select {
    @apply w-full rounded-xl flex flex-row grow items-center justify-between relative
    pr-[18px] pl-3 py-2
    sm-l:py-[4.5px];
  }

  .input-wrapper .input-select .placeholder {
    @apply whitespace-nowrap overflow-hidden
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

  .input-wrapper .input-select .arrow-container {
    @apply w-3 duration-300 ml-2
  }
</style>