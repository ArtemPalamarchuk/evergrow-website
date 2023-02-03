<script lang="ts">
import {formWindmills} from "../assets/images";
import {contactUsContent} from "@/data";
import Form from "@/components/global/Form.vue";

export default {
  components: {Form},

  setup() {
    return {
      form: contactUsContent.form,
      formWindmills,
    }
  },
}
</script>

<template>
  <section class="full-width-filled bg-light-green">
    <div class="max-w-[1440px] flex flex-col md:flex-row m-auto">
      <div class="relative lg:max-h-full md:w-1/2">
        <img class="object-cover max-h-[442px] md:max-h-[562px] w-full" :src="formWindmills" alt="image" loading="lazy">
        <div class="text-white absolute -translate-y-1/2 left-4 top-1/2 w-[90%] lg:left-[60px]">
          <h2 class="text-sm-h-mob sm:text-lg-h mb-4">{{ form.heading }}</h2>
          <p class="text-sm-p sm:text-lg-p">{{ form.text }}</p>
        </div>
      </div>
      <div class="contact-text-content">
        <Form colorSchema="dark"/>
      </div>
    </div>
  </section>
</template>

<style>
  .contact-text-content {
    @apply flex flex-col justify-center px-4 py-6 bg-light-green
    md:w-1/2 md:py-[58px] md:pl-[46px] md:pr-[78px]
  }
</style>
