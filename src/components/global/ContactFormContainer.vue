<script lang="ts">
import Form from "@/components/global/Form.vue";
import { contact_bg } from "@/assets/images";
import type { PropType } from "vue";
import type { ITextImage } from "@/types";

export default {
  components: {Form},
  props: {
    form: {
      type: Object as PropType<ITextImage>,
      required: true
    }
  },
  setup() {
    return {
      contact_bg,
    }
  },
}
</script>

<template>
  <section class="full-width-filled bg-primary px-4 py-[56px] sm:pt-[86px] sm:pb-[106px] md:p-0 ">
    <img
      class="hidden sm:block object-cover absolute left-0 bottom-0 md:bottom-auto"
      :src="form.img"
      alt="image"
      loading="lazy"
    />
    <div class="max-w-[1440px] h-auto md:h-[607px] flex flex-col md:flex-row m-auto">
      <div class="relative lg:max-h-full md:w-1/2">
        <div class="md:absolute md:-translate-y-1/2 left-4 mb-11 md:mb-0 md:top-1/2 w-[90%] left-[60px]">
          <h2 class="text-white text-sm-h-mob sm:text-lg-h mb-4">{{ form.heading }}</h2>
          <p class="text-white text-sm-p sm:text-lg-p">{{ form.text }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-center bg-primary md:w-1/2 md:pl-[46px] md:pr-[74px]">
        <Form/>
      </div>
    </div>
  </section>
</template>
