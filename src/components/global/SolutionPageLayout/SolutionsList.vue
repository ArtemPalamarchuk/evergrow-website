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
  <div class="flex flex-col
              gap-y-[60px] md:gap-y-[80px]
              py-[60px] md:py-[80px]
              px-4 md:px-[120px]">
    <div>
      <h2 class="text-sm-h sm:text-xmd-h">Headline Here</h2>
      <p class="text-md-i sm:text-lg-i">We bring deep experience in compliance technology, software engineering, and project finance</p>
    </div>
    <div class="grid
                grid-cols-1 sm:grid-cols-2
                gap-8 sm:gap-[60px] md:gap-[100px]">
      <div class="flex flex-col" v-for="{img, title, text} in list">
        <img class="w-[88px] h-[88px] mb-4 sm:mb-5" :src="img" alt="image" loading="lazy">
        <div class="flex flex-col text-dark">
          <h3 class="text-sm-h mb-4">{{ title }}</h3>
          <p class="text-sm-p md:text-lg-p">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>