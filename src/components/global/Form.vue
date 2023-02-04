<script>
import BaseInput from "./Input/BaseInput.vue";
import Select from "./Input/Select.vue";
import TextArea from "./Input/TextArea.vue";
import CheckBox from "./Input/Checkbox.vue";
import Button from "./Button.vue";
import {useVuelidate} from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";
import Spinner from "@/components/global/Spinner.vue";

const default_form_data = {
  name: "",
  email: "",
  organization: "",
  'interested in': "",
  message: "",
}

export default {
  components: {Spinner, BaseInput, Select, TextArea, CheckBox, Button},
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      userData: {...default_form_data},
      formHeight: 0,
      formIsSended: false,
      isLoading: false
    }
  },
  validations() {
    return {
      userData: {
        name: {required, $autoDirty: true},
        email: {required, email, $autoDirty: true},
      },
    }
  },
  methods: {
    async sendForm() {
      const isValid = await this.v$.userData.$validate()

      if (isValid) {
        const userData = JSON.parse(JSON.stringify(this.userData))

        try {
          this.setIsLoading(true)

          await this.axios.post('https://app.evergrow.com/email/', userData)

          this.setSendedForm(true)
        } catch (error) {
          console.log({error})
        } finally {
          this.setDefaultFormState()
        }

      }
    },

    setDefaultFormState() {
      this.setIsLoading(false)
      this.userData = default_form_data
    },
    updateValue(option) {
      this.userData['interested in'] = option
    },
    setSendedForm(bool) {
      this.formIsSended = bool
    },
    setIsLoading(bool) {
      this.isLoading = bool
    }
  },
  computed: {
    errMessages() {
      return {
        name: this.v$.userData.name.$dirty ? this.v$.userData.name.$silentErrors[0]?.$message || "" : "",
        email: this.v$.userData.email.$dirty ? this.v$.userData.email.$silentErrors[0]?.$message || "" : "",
      }
    },
    classes() {
      return this.isLoading ? 'opacity-50' :'opacity-100'
    },
    getFormHeight() {
      return this.formHeight + 'px'
    }
  },
  mounted() {
    this.formHeight = this.$refs.form.clientHeight
  }
}
</script>

<template>
  <div
    class="thank-container text-primary-black text-center flex flex-col p-10 justify-center items-center"
    v-if="formIsSended"
    :style="{height: getFormHeight}"
  >
    <h2 class="text-sm-h-mob sm:text-lg-h mb-4">Thank you for your message!</h2>
    <p class="text-sm-p sm:text-lg-p">We look forward to working together and will be in touch soon</p>
  </div>
  <form v-else class="contact-form" ref="form">
    <h1 class="text-xs-md-h mb-3.5">Get in touch</h1>
    <div :class="`${classes} text-fields`">
      <base-input
        :err-msg="errMessages.name"
        v-model="userData.name"
        label="Name"
        name="name"
        :disabled="isLoading"
        placeholder="Jane Kaul"
      />
      <base-input
        :err-msg="errMessages.email"
        v-model="userData.email"
        label="Email address"
        name="email"
        :disabled="isLoading"
        placeholder="example@mail.com"
      />
      <base-input
        v-model="userData.organization"
        label="Organization"
        name="organization"
        :disabled="isLoading"
        placeholder="Organization"
      />
      <Select
        :value="userData['interested in']"
        placeholder="Please Select"
        label="I am interested in"
        @updateValue="updateValue"
        :disabled="isLoading"
      />
      <text-area
        v-model="userData.message"
        label="Message"
        name="message"
        :disabled="isLoading"
        placeholder="Tell us about yourself"
      />
    </div>
    <div v-if="isLoading" class="spinner-container">
      <spinner/>
    </div>
    <Button
      text="Get Started"
      variant="black"
      :class="`${classes} w-full flex justify-center py-1.5 sm:py-3 mt-7 sm:mt-11`"
      :disabled="isLoading"
      @click.prevent="sendForm"
    />
  </form>
</template>

<style scoped>
  .thank-container h2 {
    @apply whitespace-pre-line
  }

  .spinner-container {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  }

  .contact-form {
    @apply w-full relative bg-white rounded-xl px-4 py-8 sm:px-8 sm:py-11
  }

  .contact-form .text-fields {
    @apply grid grid-cols-1 gap-x-6 gap-y-2
    sm-l:grid-cols-2
  }

  .contact-form .input-wrapper input {
    @apply py-2.5
  }

  .contact-form .input-wrapper.textarea {
    @apply col-start-1 col-end-2
    sm-l:col-start-1 sm-l:col-end-3 sm-l:row-start-3 sm-l:row-end-3;
  }
</style>