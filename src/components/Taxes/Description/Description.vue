<script setup>
import Button from "@/components/global/Button.vue";
import {taxesHeroContent} from "@/data";
import {snow} from "@/assets/images";
import TextImage from "@/components/global/TextImage.vue";

const {heading, text, buttonText} = taxesHeroContent
</script>

<template>
  <section class="description">
    <text-image
      :heading="heading"
      :mainText="text"
      :img="snow"
      :isReversed="false"
      contentBg="light-green"
      textColor="dark"
    >
      <template v-slot:button>
        <Button :text="buttonText"/>
      </template>
    </text-image>
  </section>
</template>

<style scoped>
  .description {
    @apply flex flex-col lg:flex-row
  }

  button {
    @apply bg-secondary w-fit mt-1.5 md:mt-5
  }
</style>
