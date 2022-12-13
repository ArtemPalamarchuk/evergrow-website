<script setup lang="ts">
import {francisco} from "@/assets/images";
import {aboutHeroContent} from "@/data";
import TextImage from "@/components/global/TextImage.vue";

const {heading, text, secondaryText} = aboutHeroContent
</script>

<template>
  <section class="description-wrapper">
    <text-image
      :heading="heading"
      :mainText="text"
      :secondaryText="secondaryText"
      :img="francisco"
      :isReversed="false"
      contentBg="primary"
    />
  </section>
</template>
