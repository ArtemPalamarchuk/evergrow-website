<script lang="ts">
import BaseInput from "@/components/global/Input/BaseInput.vue";
import Select from "@/components/global/Input/Select.vue";
import TextArea from "@/components/global/Input/TextArea.vue";
import CheckBox from "@/components/global/Input/Checkbox.vue";
import Button from "@/components/global/Button.vue";
import type {PropType} from "vue";
import type {IForm} from "@/types";

export default {
  components: {BaseInput, Select, TextArea, CheckBox, Button},
  props: {
    formContent: {
      type: Object as PropType<IForm>,
    },
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
        organization: "",
        interested: "",
        message: "",
        isScheduled: false,
      },
      optionsList: ['A', "B", "C"]
    }
  },
  methods: {
    sendForm() {
      // console.log(this.userData)
    }
  }
}
</script>

<template>
  <section class="description-wrapper">
    <div class="text-content">
      <h2 class="text-white">{{ formContent.heading }}</h2>
      <p class="text-white">{{ formContent.text }}</p>
    </div>
    <form action="">
      <div class="text-fields">
        <base-input v-model="userData.name" label="Name" name="name"/>
        <base-input v-model="userData.email" label="Email address" name="email"/>
        <base-input v-model="userData.organization" label="Organization" name="organization"/>
        <Select
          @click.capture v-model="userData.interested"
          placeholder="Please Select"
          :option-list="optionsList"
          label="I am interested in"
          name="interested"
        />
        <text-area v-model="userData.message" label="Message" name="message"></text-area>
      </div>
      <check-box v-model="userData.isScheduled" label="Schedule a meeting" name="isScheduled"/>
      <Button @click.prevent="sendForm" :text="formContent.buttonText"/>
    </form>
  </section>
</template>

<style scoped>
  .description-wrapper {
    @apply flex flex-col gap-x-[100px] gap-y-6 bg-secondary py-[56px] px-4
    sm-l:py-[76px]
    md:px-[120px]
    lg:flex-row
  }

  button {
    @apply bg-white text-secondary ml-auto mt-6 px-9
    sm-l:px-10
  }

  form {
    @apply w-full
  }

  form .checkbox {
    @apply mt-6
  }

  .text-fields {
    @apply grid grid-cols-1 gap-x-6 gap-y-2
    sm-l:grid-cols-2
  }

  .text-fields .input-wrapper:nth-child(5) {
    @apply col-start-1 col-end-2
    sm-l:col-start-1 sm-l:col-end-3 sm-l:row-start-3 sm-l:row-end-3;
  }

  h2 {
    @apply text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h whitespace-nowrap;
  }

  p {
    @apply text-sm-p sm:text-md-p;
  }

  .text-content {
    @apply flex flex-col justify-center;
  }
</style>

