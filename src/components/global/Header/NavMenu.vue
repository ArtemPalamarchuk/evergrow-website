<script setup>
import {chevron} from "../../../assets/images";
import {ref} from "vue";
import Solutions from "../Solutions.vue";

const isActiveDDMenu = ref(false)

const nav = ([
  {
    id: 'pricing',
    name: 'Pricing',
    to: '/pricing',
  },
  {
    id: 'about',
    name: 'About',
    to: '/about',
  },
]);

const toggleSolutionsMenu = () => {
  // isActiveDDMenu.value = !isActiveDDMenu.value
}

</script>

<template>
  <nav class="nav-menu">
    <div class="solutions-container" @click="toggleSolutionsMenu">
      <a @click="false">Solutions</a>
      <img :src="chevron" alt="chevron">
      <solutions v-if="isActiveDDMenu"/>
    </div>
    <router-link
      v-for="{ name, to, id } in nav"
      :id="id"
      :key="id"
      :name="name"
      :to="to"
    >
      {{ name }}
    </router-link>
  </nav>
</template>

<style scoped>
  .nav-menu {
    @apply w-full flex justify-center gap-8 text-[#1a1a1a] opacity-70 z-1;
  }

  .solutions-container {
    @apply flex relative gap-2 cursor-pointer pl-2;
  }

  .solutions {
    @apply w-[200px] absolute top-full bg-[#d6d6d6] left-0 px-2 py-2;
  }

  .solutions li {
    @apply mb-2;
  }

  .solutions li:last-child {
    @apply mb-0;
  }
</style>