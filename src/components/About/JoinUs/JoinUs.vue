<script setup>
import Button from "../../../components/global/Button.vue";
import { joinUs } from "../../../assets/images";
</script>

<template>
  <section class="joinUs">
    <div class="text-content">
      <h2>Join us</h2>
      <p>
        Evergrow works in person at the beautiful Shack 15 space in the iconic San Francisco Ferry Building.
        We are always looking for talented and mission-driven individuals to join our team.
        Take a look at our openings and get in touch!
      </p>
      <Button text="See current openings"/>
    </div>
    <img :src="joinUs" alt="joinUs">
  </section>
</template>

<style scoped>
.joinUs {
  @apply flex
}

.text-content {
  @apply w-1/2 bg-secondary flex flex-col justify-center pl-[120px] pr-[73px]
}

h2 {
  @apply text-white text-lg-h mb-4
}

p {
  @apply text-white text-md-p mb-16
}

button {
  @apply px-[100px] py-[13px] bg-white text-secondary w-fit
}

button span{
  @apply text-secondary
}

img {
  @apply w-1/2
}
</style>
