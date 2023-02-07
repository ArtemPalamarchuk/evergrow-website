<script lang="ts">
import Button from "../Button.vue";
import {solutionsMenu} from "../Header/solutions";
import {logo, close, chevron} from "@/assets/images";

export default {
  components: {Button},
  props: ['isActiveSidebarMenu', 'isActiveSolutionsMenu', 'sidebarStyling'],
  emits: ['navigate', 'closeMenu', 'toggleSolutionsMenu'],
  data() {
    return {
      solutionsMenu,
      logo, close, chevron,
    }
  }
}
</script>

<template>
  <div class="sidebar-wrapper" :class="isActiveSidebarMenu ? 'visible' : 'invisible'">
    <div class="overlay" @click="this.$emit('closeMenu')"/>
    <div class="sidebar-menu" :class="sidebarStyling">
      <div class="top-bar">
        <img :src="logo" alt="logo" @click="this.$emit('navigate', '/')" loading="lazy">
        <img :src="close" alt="close" @click="this.$emit('closeMenu')" loading="lazy">
      </div>
      <div class="divider"/>
      <div class="sidebar-content">
        <div class="solutions-container" @click="this.$emit('toggleSolutionsMenu')">
          <a>Solutions</a>
          <img
            class="duration-300"
            :src="chevron"
            alt="chevron"
            :style="{transform: isActiveSolutionsMenu ? 'rotate(180deg)' : 'rotate(0)' }"
          >
        </div>

        <ul class="sidebar-solutions" v-if="isActiveSolutionsMenu">
          <li v-for="{ path, title } in solutionsMenu" @click="this.$emit('navigate', path)">
            <span>{{ title }}</span>
          </li>
        </ul>

        <div class="flex flex-col">
          <a class="mt-10 cursor-pointer" @click.prevent="this.$emit('navigate', '/about')">About</a>
          <a class="mt-10" href="https://app.evergrow.com/" target="_blank">Log in</a>
          <Button class="w-[180px] h-[58px] flex justify-center w-fit mt-10" text="Contact Us" @click="this.$emit('navigate', 'contact-us')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sidebar-wrapper {
    @apply flex fixed h-screen w-screen top-0 right-0 left-0 bottom-0 flex-row z-[2] text-dark;
    background-color: rgba(42, 69, 71, 0.7);
  }

  .overlay {
    @apply w-[20%] sm:w-[40%]
  }

  .sidebar-menu {
    @apply w-[80%] sm:w-[60%] bg-white h-screen duration-300 translate-x-[100%]
  }

  .top-bar {
    @apply py-[18px] flex items-center justify-between pl-4 pr-6
  }

  .top-bar img {
    @apply cursor-pointer
  }

  .divider {
    @apply bg-dark opacity-30 h-[1px] w-full;
  }

  .sidebar-content {
    @apply pt-[42px] px-4
  }

  .solutions-container {
    @apply flex gap-2 cursor-pointer
  }

  .sidebar-solutions {
    @apply flex flex-col w-full gap-5 mt-6 ml-[-6px]
  }

  .sidebar-solutions li {
    @apply flex flex-row items-center text-sm-p font-urbanist-b duration-300 cursor-pointer;
  }

  .sidebar-solutions span {
    @apply duration-300 text-primary-black
  }
  .sidebar-solutions span:hover {
    @apply text-primary;
  }

  .active {
    @apply translate-x-0;
  }
</style>