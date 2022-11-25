<script setup lang="ts">
interface TextImageProps {
  heading: string
  mainText: string
  secondaryText?: string
  img: string
}
const {heading, mainText, secondaryText = "", img} = defineProps<TextImageProps>()

</script>

<template>
  <section class="text-image">
    <div class="text-content">
      <h2>{{heading}}</h2>
      <p>{{mainText}}</p>
      <p v-if="secondaryText">{{secondaryText}}</p>
      <slot name="button"/>
    </div>
    <img :src="img" alt="image">
  </section>
</template>

<style scoped>
  .text-image {
    @apply flex flex-col-reverse
    lg:flex-row
  }

  .text-content {
    @apply bg-secondary px-4 py-6 flex flex-col justify-center
    sm:pr-[78px]
    lg:py-[58px] lg:pl-[120px] lg:pr-[78px]
    lg:w-1/2
  }

  h2 {
    @apply text-white text-sm-h-mob mb-4
    sm:text-md-h-tab
    md:text-lg-h
  }

  p {
    @apply text-white text-md-i mb-[26px]
    sm:text-md-p
  }

  img {
    @apply object-cover max-h-[550px] lg:max-h-full
    lg:w-1/2
  }
</style>
