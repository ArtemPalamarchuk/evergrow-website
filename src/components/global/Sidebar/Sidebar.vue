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
        <img :src="logo" alt="logo" @click="this.$emit('navigate', '/')">
        <img :src="close" alt="close" @click="this.$emit('closeMenu')">
      </div>
      <div class="divider"/>
      <div class="sidebar-content">
        <div class="solutions-container" @click="this.$emit('toggleSolutionsMenu')">
          <a>Solutions</a>
          <img class="duration-300" :src="chevron" alt="chevron"
               :style="{transform: isActiveSolutionsMenu ? 'rotate(180deg)' : 'rotate(0)' }">
        </div>

        <ul class="sidebar-solutions" v-if="isActiveSolutionsMenu">
          <li v-for="{ path, title, img } in solutionsMenu" @click="this.$emit('navigate', path)">
            <img :src="img" alt="page">
            <span>{{ title }}</span>
          </li>
        </ul>

        <div class="flex flex-col">
          <a class="mt-10 cursor-pointer" @click.prevent="this.$emit('navigate', '/about')">About</a>
          <a class="mt-10" href="/">Log in</a>
          <Button class="w-fit mt-10" text="Contact Us" @click="this.$emit('navigate', 'contact-us')"/>
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
    @apply flex items-center justify-between pt-8 px-4 pb-4
  }

  .top-bar img{
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
    @apply grid grid-cols-1 w-full gap-2.5 mt-2.5
  }

  .sidebar-solutions li {
    @apply flex flex-row items-center text-xs-h-mob font-urbanist-b rounded-[10px] duration-300
    cursor-pointer border-[1px] border-solid border-beige;
  }

  .sidebar-solutions li:hover {
    @apply border-[1px] border-solid border-primary;
  }

  .sidebar-solutions li img {
    @apply w-[60px] h-[60px] m-2.5;
  }

  .active {
    @apply translate-x-0;
  }
</style>