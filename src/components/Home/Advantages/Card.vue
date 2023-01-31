<script setup lang="ts">
import router from "@/router";

interface CardProps {
  img: string,
  title: string,
  text: string,
  path: string,
}

const {img, title, text, path} = defineProps<CardProps>()
</script>

<template>
  <div class="card" @click="router.push({path})">
    <img :src="img" alt="card" loading="lazy">
    <div class="content">
      <div class="text-container">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
      <div class="icon">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 1.05718C11.9111 0.536482 12.7554 0.536482 13.2761 1.05718L21.2761 9.05718C21.5261 9.30723 21.6666 9.64637 21.6666 9.99999C21.6666 10.3536 21.5261 10.6928 21.2761 10.9428L13.2761 18.9428C12.7554 19.4635 11.9111 19.4635 11.3904 18.9428C10.8697 18.4221 10.8697 17.5779 11.3904 17.0572L17.1143 11.3333L1.66659 11.3333C0.930206 11.3333 0.333252 10.7364 0.333252 9.99999C0.333252 9.26361 0.930206 8.66666 1.66659 8.66666H17.1143L11.3904 2.9428C10.8697 2.4221 10.8697 1.57788 11.3904 1.05718Z" fill="#068576"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    @apply rounded-bl-[2rem] rounded-t-[2rem] bg-primary cursor-pointer duration-300
  }

  .card:hover {
    @apply bg-[#036D61];
  }

  .card:hover .content .icon {
    @apply bg-[#F18060];
  }

  .card:hover .icon path {
    @apply duration-300 fill-white
  }

  img[alt="card"] {
    @apply rounded-t-[2rem] w-full
  }

  .content {
    @apply p-4 h-[134px] relative
    sm:min-h-[194px]
    md:px-8 md:py-8 md:items-center md:h-[134px]
  }

  h3 {
    @apply text-md-i text-white mb-1
    sm:text-sm-h sm:mb-2
    md:max-w-[80%]
  }

  p {
    @apply text-xs-h-mob text-white
    sm:text-md-i
    md:max-w-[90%]
  }

  .content .icon {
    @apply absolute w-8 h-8 right-4 bottom-4 bg-[#F0F7F6] rounded-[30px] flex items-center justify-center duration-500
    sm:w-10 sm:h-10
  }

  .icon {
    @apply w-4 h-[14px] sm:w-[21px] sm:h-[18px]
  }
</style>
