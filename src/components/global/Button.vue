<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

enum ButtonVariants {
  primary = 'primary',
  black = 'black',
  white = 'white',
}

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<ButtonVariants>,
      default: 'primary'
    },
    text: String,
    img: String
  },
  computed: {
    classes() {
      const default_styles = 'bg-primary text-white'

      if (this.variant === ButtonVariants.primary) return default_styles
      if (this.variant === ButtonVariants.black) return 'bg-primary-black text-white'
      if (this.variant === ButtonVariants.white) return 'bg-white text-primary-black'

      return default_styles
    }
  },
})
</script>

<template>
  <button :class="classes">
    {{ text }}
    <img v-if="img" :src="img"/>
  </button>
</template>

<style scoped>
  button {
    @apply flex items-center rounded-[60px] cursor-pointer whitespace-nowrap
           text-xmd-i font-urbanist-sb relative z-1;
  }
</style>