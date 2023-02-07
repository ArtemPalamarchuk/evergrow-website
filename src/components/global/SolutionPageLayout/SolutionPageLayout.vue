<script lang="ts">
import Button from "@/components/global/Button.vue";
import TextImage from "@/components/global/TextImage.vue";
import SolutionsList from "@/components/global/SolutionPageLayout/SolutionsList.vue";
import ContactFormContainer from "@/components/global/ContactFormContainer.vue";
import type { IList, ITextImage } from "@/types";
import type { PropType } from "vue";

export default {
  components: {ContactFormContainer, SolutionsList, Button, TextImage},
  props: {
    textImage: {
      type: Object as PropType<ITextImage>,
      required: true
    },
    list: {
      type: Object as PropType<IList>,
      required: true
    },
    form: {
      type: Object as PropType<ITextImage>,
      required: true
    },
  },
}
</script>

<template>
  <text-image
    :heading="textImage.heading"
    :mainText="textImage.text"
    :img="textImage.img"
    :isReversed="false"
    contentBg="light-green"
    textColor="dark"
  >
    <template v-slot:button>
      <a target="_blank" href="https://app.evergrow.com/quote">
        <Button :text="textImage.buttonText"/>
      </a>
    </template>
  </text-image>
  <solutions-list :list="list"/>
  <contact-form-container :form="form"/>
</template>

<style scoped>
  button {
    @apply bg-primary-black w-fit mt-1.5 md:mt-5 sm-l:py-[13px] px-10 py-2.5
    sm-l:px-[56px]
  }
</style>
