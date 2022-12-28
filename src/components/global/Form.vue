<script lang="ts">
import BaseInput from "./Input/BaseInput.vue";
import Select from "./Input/Select.vue";
import TextArea from "./Input/TextArea.vue";
import CheckBox from "./Input/Checkbox.vue";
import Button from "./Button.vue";
import {useVuelidate} from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";

export default {
  components: {BaseInput, Select, TextArea, CheckBox, Button},
  props: {
    colorSchema: {
      type: String
    }
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
      isFormSended: false
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
        const userData = JSON.stringify(this.userData);

        // const response = await fetch('api-url', {
        //   method: 'POST',
        //   body: userData,
        // });

        this.$toast.show("Form has been sended successfully. Thank you!", {
          type: "success",
          position: 'top',
          duration: 4000,
          maxToasts: 1,
          queue: false
        });
      }
    },
    updateValue(option: string) {
      //@ts-ignore
      this.userData.interested = option
    },
  },
  computed: {
    errMessages() {
      return {
        name: this.v$.userData.name.$dirty ? this.v$.userData.name.$silentErrors[0]?.$message || "" : "",
        email: this.v$.userData.email.$dirty ? this.v$.userData.email.$silentErrors[0]?.$message || "" : "",
      }
    },
    btnStyle(){
      const btnColor = this.$props.colorSchema === 'dark' ? 'white' : '#F1805F'
      const btnBgColor = this.$props.colorSchema === 'dark' ? '#F1805F' : 'white'

      return {
        color: `${btnColor}`,
        background: `${btnBgColor}`
      }
    },
  },
}
</script>

<template>
  <form class="contact-form">
    <div class="text-fields">
      <base-input :colorSchema="this.$props.colorSchema" :err-msg="errMessages.name" v-model="userData.name" label="Name" name="name"/>
      <base-input :colorSchema="this.$props.colorSchema" :err-msg="errMessages.email" v-model="userData.email" label="Email address" name="email"/>
      <base-input :colorSchema="this.$props.colorSchema" v-model="userData.organization" label="Organization" name="organization"/>
      <Select :colorSchema="this.$props.colorSchema" :value="userData.interested" placeholder="Please Select" label="I am interested in" @updateValue="updateValue"/>
      <text-area :colorSchema="this.$props.colorSchema" v-model="userData.message" label="Message" name="message"></text-area>
    </div>
    <Button :style="btnStyle" @click.prevent="sendForm" text="Get in touch"/>
  </form>
</template>

<style scoped>
  .contact-form {
    @apply w-full
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