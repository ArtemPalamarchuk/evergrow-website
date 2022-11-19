<script setup>
import { approach } from "../../../assets/images";
import Button from "../../../components/global/Button.vue";
</script>

<template>
  <section class="approach">
    <div class="text-content">
      <h2>The modern approach to tax credits</h2>
      <p>
        Tax credits have historically been complicated and the Inflation Reduction Act has raised the stakes. We’re
        about to see anenormous growth in tax credit eligibility, while the compliance requirements are more complex
        than ever before.
        <br/>
        <br/>
        That’s why we built Evergrow - to make tax credits simple. It’s a new approach that can scale with the challenge
        before us.
      </p>
      <Button text="Get in touch"/>
    </div>
    <img :src="approach" alt="approach">
  </section>
</template>

<style scoped>
  .approach {
    @apply flex
  }

  .text-content {
    @apply w-1/2 bg-secondary pt-[44px] pl-[120px] pr-[73px]
  }

  h2 {
    @apply text-white text-lg-h mb-4
  }

  p {
    @apply text-white text-md-p mb-[26px]
  }

  button {
    @apply px-[100px] py-[13px] mb-14 bg-white text-secondary
  }

  button span{
    @apply text-secondary
  }

  img {
    @apply w-1/2
  }
</style>
