<script setup>
import { francisco } from "../../../assets/images";
</script>

<template>
  <section class="description-wrapper">
    <div class="box-wrapper bg-primary flex-col">
      <div class="text-content px-4 py-[72px] lg:pr-[78px] lg:pl-[120px] sm:w-[65%] md:w-[80%] lg:py-[34px]">
        <h2 class="text-white">
          Helping to build and sustain a carbon neutral world
        </h2>
        <p class="text-white">
          At Evergrow, we use technology to create products that unlock funding for
          decarbonization. We partner with project developers, corporations, and
          financial institutions to help build and sustain a carbon neutral world.
        </p>
        <p class="text-white">
          Our team has experience across corporate finance, clean energy, and technology.
          We are backed by top-tier venture capital firms and leaders from the technology,
          climate, and finance communities.
        </p>
      </div>
      <img class="object-cover max-h-[550px] lg:w-1/2 lg:max-h-full" :src="francisco" alt="francisco">
    </div>
  </section>
</template>

<style scoped>
.box-wrapper {
  @apply flex lg:flex-row;
}

h2 {
  @apply text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h;
}

p {
  @apply text-sm-p sm:text-md-p;
}

.text-content {
  @apply flex flex-col justify-center lg:w-1/2
}
</style>
