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
      },
      optionsList: [
        'Saving money on taxes',
        "Monetizing my tax credits",
        "Helping my clients with tax credits",
        "Something else"
      ]
    }
  },
  methods: {
    sendForm() {
      //@ts-ignore
      const userData = JSON.parse(JSON.stringify(this.userData));
      console.log(userData)
    },
    updateValue(option: string){
      //@ts-ignore
      this.userData.interested = option
    }
  }
}
</script>

<template>
  <section class="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden justify-center bg-secondary">
    <div class="container-form-wrapper" id="contact-form">
      <div class="text-content">
        <h2 class="text-white">{{ formContent.heading }}</h2>
        <p class="text-white">{{ formContent.text }}</p>
      </div>
      <form class="contact-form">
        <div class="text-fields">
          <base-input v-model="userData.name" label="Name" name="name"/>
          <base-input v-model="userData.email" label="Email address" name="email"/>
          <base-input v-model="userData.organization" label="Organization" name="organization"/>
          <Select
            :value="userData.interested"
            placeholder="Please Select"
            :option-list="optionsList"
            label="I am interested in"
            @updateValue="updateValue"
          />
          <text-area v-model="userData.message" label="Message" name="message"></text-area>
        </div>
        <Button @click.prevent="sendForm" :text="formContent.buttonText"/>
      </form>
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

  .contact-form {
    @apply w-full
  }

  .contact-form .text-fields {
    @apply grid grid-cols-1 gap-x-6 gap-y-2
    sm-l:grid-cols-2
  }

  .contact-form .text-fields .input-wrapper input{
    @apply py-2.5
  }

  .contact-form .input-wrapper.select{
    @apply text-white
  }

  .contact-form .input-wrapper .input-select{
    @apply text-white outline-[1.5px] outline outline-white py-[3px]
  }

  .contact-form .checkbox {
    @apply mt-6 text-white
  }

  .contact-form .textarea {
    @apply col-start-1 col-end-2
    sm-l:col-start-1 sm-l:col-end-3 sm-l:row-start-3 sm-l:row-end-3;
  }

  .contact-form button {
    @apply bg-white text-secondary ml-auto mt-6 px-9
    sm-l:px-10
  }
</style>

