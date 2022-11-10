<script setup>
import NavMenu from "./NavMenu.vue"
import { logo } from "../../../assets/images";
import Button from "../Button.vue";
</script>

<template>
  <header>
    <router-link to="/" class="sidebar-title">
      <img :src="logo" alt="">
    </router-link>
    <nav-menu/>
    <Button text="Contact Us"/>
  </header>
</template>

<style scoped>
  header {
    @apply flex items-center h-[58px] mb-4 px-6 mb-[21px]
  }
</style>