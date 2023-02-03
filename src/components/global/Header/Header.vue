<script>
import router from "@/router";
import { logo } from "@/assets/images";

import NavMenu from "./NavMenu.vue"
import Button from "../Button.vue";
import Hamburger from "@/components/global/Header/Hamburger.vue";
import Sidebar from "@/components/global/Sidebar/Sidebar.vue";
import VLazyImage from "@/components/global/VLazyImage.vue";

export default {
  components: { Sidebar, Button, NavMenu, Hamburger, VLazyImage },
  data(){
    return {
      logo,
      router,
      isActiveSidebarMenu: false,
      isActiveSolutionsMenu: false,
      app: document.getElementById("app"),
    }
  },
  methods: {
    openMenu(){
      this.isActiveSidebarMenu = !this.isActiveSidebarMenu
    },
    closeMenu(){
      this.isActiveSidebarMenu = false
    },
    toggleSolutionsMenu(){
      this.isActiveSolutionsMenu = !this.isActiveSolutionsMenu
    },
    navigate(path){
      this.isActiveSolutionsMenu = false
      this.closeMenu()
      router.push({ path })
    },
  },
  computed: {
    sidebarStyling(){
      return this.isActiveSidebarMenu ? 'active' : ''
    }
  }
}
</script>

<template>
  <header class="flex items-center px-4 py-[7px] shrink-0">
    <router-link to="/" class="w-[105px] shrink-0 mt-1">
      <VLazyImage class="scale-20" :src="logo"/>
    </router-link>
    <div class="hidden sm-l:flex w-full items-center">
      <nav-menu/>
      <a href="https://app.evergrow.com/" target="_blank" class="whitespace-nowrap mr-[26px]">Log in</a>
      <Button variant="primary" class="px-[18px] py-1.5" text="Contact Us" @click="navigate('/contact-us')"/>
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