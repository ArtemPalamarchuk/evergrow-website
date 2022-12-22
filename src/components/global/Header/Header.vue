<script>
import {logo} from "@/assets/images";
import NavMenu from "./NavMenu.vue"
import Button from "../Button.vue";
import Hamburger from "@/components/global/Header/Hamburger.vue";
import router from "@/router";
import Sidebar from "@/components/global/Sidebar/Sidebar.vue";

export default {
  components: {Sidebar, Button, NavMenu, Hamburger},
  data() {
    return {
      logo,
      router,
      isActiveSidebarMenu: false,
      isActiveSolutionsMenu: false,
      app: document.getElementById("app"),
    }
  },
  methods: {
    openMenu() {
      this.isActiveSidebarMenu = !this.isActiveSidebarMenu
      this.app.style.height = '100vh'
    },
    closeMenu() {
      this.isActiveSidebarMenu = false
      this.app.style.height = 'auto'
    },
    toggleSolutionsMenu() {
      this.isActiveSolutionsMenu = !this.isActiveSolutionsMenu
    },
    navigate(path) {
      this.isActiveSolutionsMenu = false
      this.closeMenu()
      router.push({path})
    },
  },
  computed: {
    sidebarStyling() {
      return this.isActiveSidebarMenu ? 'active' : ''
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <img :src="logo" alt="logo">
    </router-link>
    <div class="menu">
      <nav-menu/>
      <a href="https://app.evergrow.com/" target="_blank" class="whitespace-nowrap mr-[26px]">Log in</a>
      <Button text="Contact Us" @click="navigate('/contact-us')"/>
    </div>
    <hamburger @click="openMenu"/>
    <sidebar
      :isActiveSidebarMenu="isActiveSidebarMenu"
      :isActiveSolutionsMenu="isActiveSolutionsMenu"
      :sidebarStyling="sidebarStyling"
      @navigate="navigate"
      @closeMenu="closeMenu"
      @toggleSolutionsMenu="toggleSolutionsMenu"
    />
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
    @apply hidden sm-l:flex w-full items-center
  }
</style>