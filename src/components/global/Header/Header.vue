<script setup>
import { logo } from "@/assets/images";
import NavMenu from "./NavMenu.vue"
import Button from "../Button.vue";
import Hamburger from "@/components/global/Header/Hamburger.vue";

const hamburgerHandler = () => {}

</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <img :src="logo" alt="logo">
    </router-link>
    <div class="menu">
      <nav-menu/>
      <Button text="Contact Us"/>
    </div>
    <Hamburger @click="hamburgerHandler"/>
  </header>
</template>

<style scoped>
  header {
    @apply h-[72px] flex items-center px-4 pt-[30px] pb-[14px]
    sm:mb-[9px] sm:h-[58px] sm:px-6 sm:py-0
    md:mb-[14px]
  }

  .logo {
    @apply flex shrink-0 w-[105px] h-[25px] mt-1
  }

  .menu {
    @apply hidden sm:flex w-full items-center
  }
</style>