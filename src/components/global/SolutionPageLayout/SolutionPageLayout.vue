<script lang="ts">
import Button from "@/components/global/Button.vue";
import TextImage from "@/components/global/TextImage.vue";
import SolutionsList from "@/components/global/SolutionPageLayout/SolutionsList.vue";
import SolutionsForm from "@/components/global/SolutionPageLayout/SolutionForm.vue";
import type {IForm, IList, ITextImage} from "@/types";
import type {PropType} from "vue";

export default {
  components: {SolutionsForm, SolutionsList, Button, TextImage},
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
      type: Object as PropType<IForm>,
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
      <Button :text="textImage.buttonText"/>
    </template>
  </text-image>
  <solutions-list :list="list"/>
  <solutions-form :form-content="form"/>
</template>

<style scoped>
  button {
    @apply bg-secondary w-fit mt-1.5 md:mt-5
  }
</style>
