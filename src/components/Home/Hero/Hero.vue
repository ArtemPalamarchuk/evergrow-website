<script setup>
import Button from "../../../components/global/Button.vue";
import { hero } from "../../../assets/images";
</script>

<template>
  <section class="hero">
    <div class="text-content">
      <h1>Renewable energy tax credits made simple</h1>
      <p>Evergrow is the purpose-built solution to make IRA tax credits easy and valuable by managing compliance,
        insurance, and transactions</p>
      <Button text="Get Started"/>
    </div>
    <div class="img-wrap">
      <img :src="hero" alt="">
    </div>
  </section>
</template>

<style scoped>
  .hero {
    @apply w-full relative bg-light-green pl-[120px] py-[147px] mb-10;
  }

  .text-content {
    @apply max-w-[480px];
  }

  .text-content h1 {
    @apply text-lg-h text-dark mb-8
  }

  .text-content p {
    @apply mb-12 text-dark text-md-p;
  }

  .img-wrap {
    @apply absolute top-[144px] right-[62px];
  }

  .text-content button {
    @apply bg-secondary py-[13px] px-[56px]
  }
</style>
