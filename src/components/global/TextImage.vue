<script setup lang="ts">
import VLazyImage from './VLazyImage.vue'

interface TextImageProps {
  heading: string
  mainText: string
  secondaryText?: string
  img: string
  isReversed: boolean
  textColor?: string
  contentBg: string
}

const {
  heading,
  mainText,
  secondaryText = "",
  img,
  isReversed,
  contentBg,
  textColor = "white"
} = defineProps<TextImageProps>()

const styling = isReversed ? "flex-col-reverse" : "flex-col"
const background = `bg-${contentBg}`
const textClr = `text-${textColor}`
</script>

<template>
  <section class="full-width-filled" :class="[background, textClr]">
    <div class="max-w-[1440px] flex tablet-portrait:flex-row m-auto" :class="styling">
      <div class="text-content tablet-portrait:w-1/2">
        <h2 class="text-sm-h mb-4 sm-l:text-md-h-tab md:text-lg-h">{{ heading }}</h2>
        <p>{{ mainText }}</p>
        <p v-if="secondaryText">{{ secondaryText }}</p>
        <slot name="button"/>
      </div>
      <v-lazy-image
        class="max-h-[450px] tablet-portrait:max-h-full tablet-portrait:w-1/2"
        :src="img"
      />
<!--      <img class="object-cover max-h-[450px] tablet-portrait:max-h-full tablet-portrait:w-1/2" :src="img" alt="image" loading="lazy">-->
    </div>
  </section>
</template>

<style scoped>
  .text-content {
    @apply flex flex-col justify-center px-4 py-6
    sm:pr-[78px]
    lg:w-1/2 lg:py-[58px] lg:pl-[120px] lg:pr-[78px]
  }

  p {
    @apply text-sm-p mb-[26px] md:text-lg-p
  }
</style>
