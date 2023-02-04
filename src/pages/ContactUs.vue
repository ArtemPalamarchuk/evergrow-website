<script lang="ts">
import ContactFormContainer from "@/components/global/ContactFormContainer.vue";
import { contactUsContent } from "@/data";

export default {
  components: {ContactFormContainer},
  setup() {
    return {
      contactUsContent
    }
  }
}
</script>

<template>
  <contact-form-container :form="contactUsContent"/>
</template>
