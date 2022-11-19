<script setup>
import { logo } from "../../../assets/images";
import Solutions from "../Solutions.vue";
</script>

<template>
  <footer>
    <div class="info">
      <div class="evergrow">
        <router-link to="/">
          <img :src="logo" alt="logo">
        </router-link>
        <p>© 2022 Company</p>
      </div>
      <div class="solutions">
        <p class="title">Solutions</p>
        <solutions/>
      </div>
      <div class="company">
        <p class="title">Company</p>
        <ul>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/pricing">Pricing</router-link>
          </li>
        </ul>
      </div>
      <div class="other">
        <p class="title">Other</p>
        <ul>
          <li>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="/terms-of-service">Terms of Service</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    @apply bg-[#F5F3EF] px-[120px] pb-8 pt-[80px] text-dark
  }

  .info {
    @apply flex justify-between
  }

  .evergrow img {
    @apply mt-4 mb-4
  }

  .evergrow p, .title {
    @apply text-xs-h-mob mb-4
  }

  li {
    @apply text-md-i mb-4
  }
</style>