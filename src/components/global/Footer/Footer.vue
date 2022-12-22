<script setup>
import { logo } from "@/assets/images";
</script>

<template>
  <footer>
    <div class="info">
      <div class="evergrow">
        <router-link to="/">
          <img :src="logo" alt="logo">
        </router-link>
        <p>© 2022 Evergrow Inc.</p>
      </div>
      <div class="solutions-wrap">
        <p class="title">Solutions</p>
        <ul>
          <li><router-link to="/sponsors">For project sponsors</router-link></li>
          <li><router-link to="/corporate-net-zero">For corporate net-zero</router-link></li>
          <li><router-link to="/contractors">For EPCs and contractors</router-link></li>
          <li><router-link to="/taxes">For tax equity</router-link></li>
        </ul>
      </div>
      <div class="company">
        <p class="title">Company</p>
        <ul>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact-us">Contact</router-link>
          </li>
        </ul>
      </div>
<!--      <div class="other">-->
<!--        <p class="title">Other</p>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <router-link to="/privacy-policy">Privacy Policy</router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link to="/terms-of-service">Terms of Service</router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </footer>
</template>

<style scoped>
  footer {
    @apply bg-beige text-dark px-4 pt-10 pb-8 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden justify-center
    sm:py-8
    md:px-[120px] md:py-[56px]
  }

  .info {
    @apply grid pt-2 max-w-[1440px] mx-auto
    sm:grid-cols-auto-columns
    md:grid-cols-3
  }

  .info > div{
    @apply justify-self-start
    md:justify-self-center
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

  .evergrow p, .title, li {
    @apply text-sm-i md:text-xs-h-mob
  }

  li {
    @apply md:text-md-i
  }

  .title:not(.solutions-wrap .title) {
    @apply mt-8 mb-2
    md:mt-0
  }

  .solutions-wrap .title {
    @apply mb-2 mt-6
    md:mt-0
  }

  li:not(li:last-child) {
    @apply mb-2
  }
</style>
