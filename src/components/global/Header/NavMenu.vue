<script>
import {chevron} from "@/assets/images";
import {solutionsMenu} from "@/components/global/Header/solutions";

export default {
  name: 'dropdown',
  data() {
    return {
      nav: [
        {
          id: 'about',
          name: 'About',
          to: '/about',
        },
      ],
      isActiveDDMenu: false,
      solutionsMenu,
      chevron
    }
  },
  methods: {
    toggleDropdown() {
      this.isActiveDDMenu = !this.isActiveDDMenu
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActiveDDMenu = false
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close)
  }
}

</script>

<template>
  <nav class="nav-menu">
    <div class="solutions-container" @click="toggleDropdown">
      <a>Solutions</a>
      <img :src="chevron" alt="chevron" :style="{transform: isActiveDDMenu ? 'rotate(180deg)' : 'rotate(0)' }">
    </div>
    <Transition>
      <ul class="solutions-header" v-if="isActiveDDMenu">
        <li v-for="{ path, title, img } in solutionsMenu" @click="this.isActiveDDMenu = false">
          <router-link :to="path">
            <img :src="img" alt="page">
            <span>{{ title }}</span>
          </router-link>
        </li>
      </ul>
    </Transition>
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
    @apply w-full flex gap-8 z-1 text-dark justify-center;
  }

  .solutions-container {
    @apply flex relative gap-2 cursor-pointer pl-2;
  }

  .solutions-header {
    @apply grid grid-cols-1 w-max gap-2.5 absolute
    top-[80px] left-1/2 -translate-x-1/2 px-2.5 py-3
    bg-white whitespace-nowrap rounded-2xl
    sm-l:grid-cols-2;
    box-shadow: 0 34px 44px -30px rgba(13, 43, 46, 0.3);
  }

  .solutions-header li:hover {
    @apply border-[1px] border-solid border-primary;
  }

  .solutions-header li {
    @apply text-md-p font-urbanist-b rounded-[10px] duration-300
    border-[1px] border-solid border-beige;
  }

  .solutions-header li:nth-child(2) {
    @apply pr-[30px]
  }

  .solutions-header li a {
    @apply flex flex-row items-center;
  }

  .solutions-header li img {
    @apply p-2.5 w-[100px] h-[100px];
  }

  img[alt=chevron] {
    @apply duration-300
  }

  .v-enter-active, .v-leave-active {
    @apply duration-300 transition-opacity
  }

  .v-enter-from, .v-leave-to {
    @apply opacity-0
  }
</style>