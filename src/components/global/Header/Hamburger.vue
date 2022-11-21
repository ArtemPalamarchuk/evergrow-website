<script setup>

</script>

<template>
  <div class="hamburger-menu">
    <span/>
    <span/>
    <span/>
  </div>
</template>

<style scoped>
  .hamburger-menu {
    @apply ml-auto flex flex-col justify-between items-end gap-[3px] sm:hidden cursor-pointer
  }

  .hamburger-menu span {
    @apply h-[2px] w-[18px] bg-primary rounded
  }
</style>