<script lang="ts">
import type {PropType} from "vue";
import type {IList} from "@/types";

export default {
  props: {
    list: {
      type: Object as PropType<IList>,
    }
  },
}
</script>

<template>
  <section class="solutions-list">
    <div class="solutions-item" v-for="{img, title, text} in list">
      <img :src="img" alt="image">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .solutions-list {
    @apply flex flex-col p-4 py-[56px] gap-y-8
    md:px-[120px]
    lg:px-[200px]
  }

  .solutions-item {
    @apply flex flex-col items-center
    sm-l:flex-row sm-l:gap-x-3;
  }

  .solutions-item img {
    @apply rounded-t-[2rem] w-[150px] h-[150px] mx-5 my-6
    md:mx-16
  }

  .text-container {
    @apply flex flex-col text-center text-dark
    sm-l:text-left sm-l:justify-center sm-l:py-7
  }

  h3 {
    @apply text-sm-h mb-4;
  }

  p {
    @apply text-sm-p md:text-lg-p
  }
</style>
