<script setup>
import { francisco, biden, deliver } from "../../../assets/images";
</script>

<template>
  <section class="description-wrapper">
    <div class="description bg-primary">
      <div class="text-content">
        <h2 class="text-white text-lg-h font-urbanist-b mb-4">
          Helping to build and sustain a carbon neutral world
        </h2>
        <p class="text-white text-md-p font-urbanist-m mb-[26px]">
          Evergrow is a technology startup based in San Francisco, California.
          We build financial and compliance tools to enable a swift and
          just transition to a world with abundant carbon-neutral energy.
        </p>
      </div>
      <div class="w-1/2"><img :src="francisco" alt="francisco"></div>
    </div>

    <div class="description bg-white py-24">
      <div class="text-content">
        <h2 class="text-dark text-lg-h font-urbanist-b mb-4">
          An unprecedented climate opportunity
        </h2>
        <p class="text-dark text-md-p font-urbanist-m mb-[26px]">
          In August 2022, the US government enacted the Inflation Reduction Act (IRA),
          which authorizes new funding for a comprehensive set of clean energy technologies.
          The law is expected to deploy hundreds of billions of dollars, but there’s no cap -
          the more projects built, the more funding is issued. IRA funding is structured as
          politically durable tax credits that provide certainty into the 2030s.
          It also comes with strong requirements to pay good wages and train the next generation workforce.
        </p>
      </div>
      <img class="rounded-t-[2rem] rounded-bl-[2rem]" :src="biden" alt="biden">
    </div>

    <div class="description bg-light-green py-24">
      <img class="rounded-t-[2rem] rounded-br-[2rem] ml-[120px]" :src="deliver" alt="francisco">
      <div class="text-content">
        <h2 class="text-dark text-lg-h font-urbanist-b mb-4">Time to deliver</h2>
        <p class="text-dark text-md-p font-urbanist-m mb-[26px]">
          Evergrow is focused on making the promise of this landmark legislation into a reality.
          We believe the law’s labor requirements will help to ensure that the energy transition
          increases equity and fights income inequality, and we are proud to help implement it.
          We support the law’s all-of-the-above focus on decarbonization technologies and are proud
          to work with companies of all stripes to implement them.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.description {
  @apply flex
}

.text-content {
  @apply w-1/2 flex flex-col justify-center pl-[120px] pr-[73px]
}
</style>
