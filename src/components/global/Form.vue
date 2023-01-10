<script>
import BaseInput from "./Input/BaseInput.vue";
import Select from "./Input/Select.vue";
import TextArea from "./Input/TextArea.vue";
import CheckBox from "./Input/Checkbox.vue";
import Button from "./Button.vue";
import {useVuelidate} from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";
import emailjs from 'emailjs-com';
import Spinner from "@/components/global/Spinner.vue";

const SERVICE_ID = 'service_ds785bv'
const TEMPLATE_ID = 'template_oqhzl0u'
const USER_ID = 'tiK3KBLCmpXk-1F1z'

export default {
  components: {Spinner, BaseInput, Select, TextArea, CheckBox, Button},
  props: {
    colorSchema: {
      type: String
    },
  },
  setup() {
    return {v$: useVuelidate()}
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
        const userData = this.userData;

        try {
          this.setIsLoading(true)
          await emailjs.send(SERVICE_ID, TEMPLATE_ID, userData, USER_ID)
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
      this.userData = {
        name: "",
        email: "",
        organization: "",
        interested: "",
        message: "",
      }
    },
    updateValue(option) {
      this.userData.interested = option
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
    styles() {
      const btnColor = this.$props.colorSchema === 'dark' ? 'white' : '#F1805F'
      const btnBgColor = this.$props.colorSchema === 'dark' ? '#F1805F' : 'white'
      const textFieldsOpacity = this.isLoading ? 0.5 : 1

      return {
        color: `${btnColor}`,
        background: `${btnBgColor}`,
        opacity: textFieldsOpacity
      }
    },
    thankMsgStyle() {
      return this.$props.colorSchema === 'dark' ? '#2A4547' : 'white'
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
    class="thank-container text-center flex flex-col p-10 justify-center items-center"
    v-if="formIsSended"
    :style="{height: getFormHeight, color: thankMsgStyle}"
  >
    <h2 class="text-sm-h-mob sm:text-lg-h mb-4">Thank you for your message!</h2>
    <p class="text-sm-p sm:text-lg-p">We look forward to working together and will be in touch soon</p>
  </div>
  <form v-else class="contact-form" ref="form">
    <div :style="{opacity: styles.opacity}" class="text-fields">
      <base-input
        :colorSchema="this.$props.colorSchema"
        :err-msg="errMessages.name"
        v-model="userData.name"
        label="Name"
        name="name"
        :disabled="isLoading"
      />
      <base-input
        :colorSchema="this.$props.colorSchema"
        :err-msg="errMessages.email"
        v-model="userData.email"
        label="Email address"
        name="email"
        :disabled="isLoading"
      />
      <base-input
        :colorSchema="this.$props.colorSchema"
        v-model="userData.organization"
        label="Organization"
        name="organization"
        :disabled="isLoading"
      />
      <Select
        :colorSchema="this.$props.colorSchema"
        :value="userData.interested"
        placeholder="Please Select"
        label="I am interested in"
        @updateValue="updateValue"
        :disabled="isLoading"
      />
      <text-area
        :colorSchema="this.$props.colorSchema"
        v-model="userData.message"
        label="Message"
        name="message"
        :disabled="isLoading"
      />
    </div>
    <div v-if="isLoading" class="spinner-container">
      <spinner/>
    </div>
    <Button :disabled="isLoading" :style="styles" @click.prevent="sendForm" text="Get in touch"/>
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
    @apply w-full relative
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

  .contact-form button {
    @apply ml-auto mt-6 px-9
    sm-l:px-10
  }
</style>