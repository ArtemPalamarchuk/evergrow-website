<script lang="ts">
import type { PropType } from "vue";
import type { ITextImage } from "@/types";
import Form from "@/components/global/Form.vue";

export default {
  components: {Form},
  props: {
    formContent: {
      type: Object as PropType<ITextImage>,
    },
  },
}
</script>

<template>
  <section class="full-width-filled bg-primary">
    <div class="container-form-wrapper" id="contact-form">
      <div class="text-content">
        <h2 class="text-white">{{ formContent.heading }}</h2>
        <p class="text-white">{{ formContent.text }}</p>
      </div>
      <Form colorSchema="light"/>
    </div>
  </section>
</template>

<style>
  .container-form-wrapper {
    @apply flex flex-col gap-x-[100px] gap-y-6 py-[56px] px-4 max-w-[1440px] m-auto
    sm-l:py-[76px]
    md:px-[120px]
    lg:flex-row
  }

  .container-form-wrapper .text-content {
    @apply flex flex-col justify-center;
  }

  .container-form-wrapper h2 {
    @apply text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h whitespace-nowrap;
  }

  .container-form-wrapper p {
    @apply text-sm-p sm:text-md-p;
  }
</style>

