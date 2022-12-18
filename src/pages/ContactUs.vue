<script lang="ts">
import {formWindmills} from "../assets/images";
import Button from "@/components/global/Button.vue";
import BaseInput from "@/components/global/Input/BaseInput.vue";
import Select from "@/components/global/Input/Select.vue";
import TextArea from "@/components/global/Input/TextArea.vue";
import CheckBox from "@/components/global/Input/Checkbox.vue";
import {contactUsContent} from "@/data";

export default {
  components: {BaseInput, Select, TextArea, CheckBox, Button},
  setup() {
    return {
      form: contactUsContent.form,
      formWindmills
    }
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
      optionsList: ['A', "B", "C"],
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
  <section class="flex flex-col md:flex-row">
    <div class="relative lg:max-h-full md:w-1/2">
      <img class="object-cover max-h-[442px] md:max-h-[662px] w-full" :src="formWindmills" alt="image">
      <div class="text-white absolute -translate-y-1/2 left-4 top-1/2 w-[90%] lg:left-[60px]">
        <h2 class="text-sm-h-mob sm:text-lg-h mb-4">{{ form.heading }}</h2>
        <p class="text-sm-p sm:text-lg-p">{{ form.text }}</p>
      </div>
    </div>
    <div class="contact-text-content">
      <form class="contact-us-form">
        <div class="text-fields">
          <base-input v-model="userData.name" label="Name" name="name"/>
          <base-input v-model="userData.email" label="Email address" name="email"/>
          <base-input v-model="userData.organization" label="Organization" name="organization"/>
          <Select
            v-model="userData.interested"
            placeholder="Please Select"
            :option-list="optionsList"
            label="I am interested in"
            name="interested"
          />
          <text-area v-model="userData.message" label="Message" name="message"></text-area>
        </div>
        <check-box v-model="userData.isScheduled" label="Schedule a meeting" name="isScheduled"/>
        <Button @click.prevent="sendForm" :text="form.buttonText"/>
      </form>
    </div>
  </section>
</template>

<style>
  .contact-text-content {
    @apply flex flex-col justify-center px-4 py-6 bg-light-green
    md:w-1/2 md:py-[58px] md:pl-[46px] md:pr-[78px]
  }

  .contact-text-content .contact-us-form button {
    @apply bg-secondary text-white
  }

  .contact-us-form {
    @apply w-full
  }

  .contact-us-form .checkbox {
    @apply mt-6
  }

  .contact-us-form .checkmark {
    @apply border-dark
  }

  .contact-us-form .text-fields {
    @apply grid grid-cols-1 gap-x-6 gap-y-2
    sm-l:grid-cols-2
  }

  .contact-us-form .text-fields .input-wrapper input,
  .contact-us-form .text-fields .input-wrapper select,
  .contact-us-form .text-fields .input-wrapper textarea {
    @apply outline-dark
  }

  .contact-us-form .text-fields .input-wrapper {
    @apply text-dark
  }

  .contact-us-form .text-fields .input-wrapper:nth-child(5) {
    @apply col-start-1 col-end-2
    sm-l:col-start-1 sm-l:col-end-3 sm-l:row-start-3 sm-l:row-end-3;
  }

  .contact-us-form button {
    @apply bg-white text-secondary ml-auto mt-6 px-9
    sm-l:px-10
  }
</style>