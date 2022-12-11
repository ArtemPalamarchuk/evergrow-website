<script setup>
import { logo } from "@/assets/images";
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
      <div class="solutions-wrap">
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
    @apply bg-beige text-dark px-4 pt-10 pb-8
    sm:py-8
    md:px-[120px] md:py-[56px]
  }

  .info {
    @apply grid pt-2
    sm:grid-cols-auto-columns
    md:grid-cols-4
  }

  .evergrow {
    @apply
    sm:col-span-3
    md:col-auto
  }

  .evergrow img {
    @apply mb-2
    md:mt-5
  }

  .evergrow p, .title {
    @apply text-xs-h-mob
  }

  .title:not(.solutions-wrap .title) {
    @apply mt-8 mb-2
    md:mt-0
  }

  .solutions-wrap .title {
    @apply mb-2 mt-6
    md:mt-0
  }

  li {
    @apply text-sm-i
    md:text-md-i
  }

  li:not(li:last-child) {
    @apply mb-2
  }
</style>
