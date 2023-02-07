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
      <img :src="chevron" alt="chevron" :style="{transform: isActiveDDMenu ? 'rotate(180deg)' : 'rotate(0)' }" loading="lazy">
      <Transition>
        <ul class="solutions-header" v-if="isActiveDDMenu">
          <li v-for="{ path, title } in solutionsMenu" @click="this.isActiveDDMenu = false">
            <router-link :to="path">
              <span>{{ title }}</span>
            </router-link>
          </li>
        </ul>
      </Transition>
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
    <a href="https://app.evergrow.com/quote" target="_blank">Project developers: Get a quote</a>
  </nav>
</template>

<style scoped>
  .nav-menu {
    @apply w-full relative flex tablet-portrait:gap-8 gap-6 z-1 text-dark justify-center;
  }

  .solutions-container {
    @apply w-[100px] flex relative gap-2 cursor-pointer pl-2;
  }

  .solutions-header {
    @apply flex flex-col w-max gap-6 absolute
    top-11 left-0 px-5 py-4
    bg-white rounded;
    box-shadow: 0 34px 44px -30px rgba(13, 43, 46, 0.3);
  }

  .solutions-header li {
    @apply text-sm-p duration-300;
  }

  .solutions-header span {
    @apply duration-300
  }
  .solutions-header span:hover {
    @apply text-primary;
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