<script setup>
import Card from "./Card.vue";
import { netZero, corporateFinance, sponsors, contractors, banks, syndicators } from "../../../assets/images";
</script>

<template>
  <section class="advantages">
    <div class="text-content">
      <h2>Evergrow unlocks the Inflation Reduction Act for the entire ecosystem</h2>
      <p>
        Our platform makes it simple to handle ITC, PTC, 45Q, 45Z, and other tax credits for solar, wind,
        storage, biogas, hydrogen,carbon capture, and new cutting-edge technology.
        Whether you’re building projects or investing in their tax credits,
        Evergroweliminates your complexity and risk.
      </p>
    </div>

    <div class="cards">
      <Card :img="netZero" title="Corporate net-zero" text="Catalyze clean energy while reducing costs"/>
      <Card :img="corporateFinance" title="Corporate finance" text="Procure fully-wrapped tax credits"/>
    </div>
    <div class="cards">
      <Card :img="sponsors" title="Project developers & sponsors" text="Manage compliance and tax credit monetization"/>
      <Card :img="contractors" title="EPCs & contractors" text="Verify and report labor compliance"/>
    </div>
    <div class="cards">
      <Card :img="banks" title="Banks" text="Sell tax credits or find projects"/>
      <Card :img="syndicators" title="Brokers & syndicators" text="Easily clear your credit transactions"/>
    </div>
  </section>
</template>

<style scoped>
  .advantages {
    @apply mb-10 px-[95px] py-[64px] mx-7;
  }

  .text-content {
    @apply flex mb-16 gap-[26px];
  }

  .text-content h2 {
    @apply text-lg-h text-dark font-urbanist-b w-1/2;
  }

  .text-content p {
    @apply text-md-p text-dark font-urbanist-m w-1/2;
  }

  .cards {
    @apply flex w-full gap-[26px] mb-16
  }

  .advantages .cards:last-child{
    @apply mb-0
  }
</style>