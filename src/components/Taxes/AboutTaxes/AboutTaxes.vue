<script setup>
import AboutTaxesItem from '@/components/Taxes/AboutTaxes/AboutTaxesItem.vue';
import {aboutTaxesContent} from "@/data";
</script>

<template>
  <section class="about-taxes">
    <AboutTaxesItem v-for="tax in aboutTaxesContent" :tax="tax"/>
  </section>
</template>

<style scoped>
  .about-taxes {
    @apply flex flex-col p-4 py-[56px] gap-y-8
    md:px-[120px]
    lg:px-[200px]
  }
</style>
