<script setup>
import { francisco, biden, deliver } from "../../../assets/images";
</script>

<template>
  <section class="description-wrapper">
    <div class="flex bg-primary flex flex-col lg:flex-row">
      <div class="text-content px-4 py-[72px] lg:pr-[78px] lg:pl-[120px] sm:w-[65%] md:w-[80%] lg:py-[58px]">
        <h2 class="text-white text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h">
          Helping to build and sustain a carbon neutral world
        </h2>
        <p class="text-white text-sm-p sm:text-md-p">
          Evergrow is a technology startup based in San Francisco, California.
          We build financial and compliance tools to enable a swift and just
          transition to a world with abundant carbon-neutral energy.
        </p>
      </div>
      <img class="object-cover max-h-[550px] lg:w-1/2 lg:max-h-full" :src="francisco" alt="francisco">
    </div>

    <div class="flex bg-white flex flex-col lg:flex-row py-[60px] px-4 lg:px-[120px] lg:py-24">
      <div class="text-content lg:mr-20">
        <h2 class="text-dark text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h">
          An unprecedented climate opportunity
        </h2>
        <p class="text-dark text-sm-p mb-[26px] sm:text-md-p">
          In August 2022, the US government enacted the Inflation Reduction Act (IRA),
          which authorizes new funding for a comprehensive set of clean energy technologies.
          The law is expected to deploy hundreds of billions of dollars, but there’s no cap -
          the more projects built, the more funding is issued. IRA funding is structured as
          politically durable tax credits that provide certainty into the 2030s.
          It also comes with strong requirements to pay good wages and train the next generation workforce.
        </p>
      </div>
      <img class="rounded-t-[2rem] rounded-bl-[2rem] object-cover md:w-[70%] md:mx-auto lg:w-1/2" :src="biden" alt="biden">
    </div>

    <div class="flex bg-light-green flex flex-col-reverse lg:flex-row py-[60px] px-4 lg:px-[120px] lg:py-24">
      <img class="rounded-t-[2rem] rounded-br-[2rem] object-cover md:w-[70%] md:mx-auto lg:w-1/2" :src="deliver" alt="francisco">
      <div class="text-content lg:ml-20">
        <h2 class="text-dark text-sm-h-mob mb-4 sm:text-md-h-tab md:text-lg-h">Time to deliver</h2>
        <p class="text-dark text-sm-p sm:text-md-p mb-[26px]">
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

.text-content {
  @apply flex flex-col justify-center lg:w-1/2
}
</style>
