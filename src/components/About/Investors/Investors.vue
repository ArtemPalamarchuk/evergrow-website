<script setup>
  import { xyz, congruent, firstRound, journey, garuda } from '../../../assets/images'
  import Person from '../Investors/Person.vue'
</script>

<template>
  <section class="investors">
    <h2 class="title">Our investors</h2>
    <div class="images-container">
      <div class="image-container"><img :src="xyz" alt="xyz"></div>
      <div class="image-container"><img :src="congruent" alt="congruent"></div>
      <div class="image-container"><img :src="firstRound" alt="firstRound"></div>
      <div class="image-container"><img :src="journey" alt="journey"></div>
      <div class="image-container"><img :src="garuda" alt="garuda"></div>
    </div>
    <div class="list">
      <div class="flex my-6 px-8 justify-between">
        <Person name="Ross Fubini" title="Managing Partner" subtitle="XYZ Venture Capital"/>
        <Person name="Abe Yokell" title="Managing Partner" subtitle="Congruent Ventures"/>
        <Person name="Bill Trenchard" title="Partner" subtitle="First Round Capital"/>
        <Person name="Rishi Taparia" title="Managing Partner" subtitle="Garuda Ventures"/>
      </div>
      <div class="line"/>
      <div class="flex my-6 px-8 justify-between">
        <Person name="Ross Fubini" title="Managing Partner" subtitle="XYZ Venture Capital"/>
        <Person name="Abe Yokell" title="Managing Partner" subtitle="Congruent Ventures"/>
        <Person name="Bill Trenchard" title="Partner" subtitle="First Round Capital"/>
        <Person name="Rishi Taparia" title="Managing Partner" subtitle="Garuda Ventures"/>
      </div>
      <div class="line"/>
      <div class="flex my-6 px-8 justify-between">
        <Person name="Ross Fubini" title="Managing Partner" subtitle="XYZ Venture Capital"/>
        <Person name="Abe Yokell" title="Managing Partner" subtitle="Congruent Ventures"/>
        <Person name="Bill Trenchard" title="Partner" subtitle="First Round Capital"/>
        <Person name="Rishi Taparia" title="Managing Partner" subtitle="Garuda Ventures"/>
      </div>
      <div class="line"/>
      <div class="flex my-6 px-8 justify-between">
        <Person name="Ross Fubini" title="Managing Partner" subtitle="XYZ Venture Capital"/>
        <Person name="Abe Yokell" title="Managing Partner" subtitle="Congruent Ventures"/>
        <Person name="Bill Trenchard" title="Partner" subtitle="First Round Capital"/>
        <Person name="Rishi Taparia" title="Managing Partner" subtitle="Garuda Ventures"/>
      </div>
      <div class="line"/>
      <div class="flex my-6 px-8 justify-between">
        <Person name="Ross Fubini" title="Managing Partner" subtitle="XYZ Venture Capital"/>
        <Person name="Abe Yokell" title="Managing Partner" subtitle="Congruent Ventures"/>
        <Person name="Bill Trenchard" title="Partner" subtitle="First Round Capital"/>
        <Person name="Rishi Taparia" title="Managing Partner" subtitle="Garuda Ventures"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.investors {
  @apply bg-white py-24;
}

.title {
  @apply text-dark text-md-h text-center font-urbanist-b mb-8;
}

.images-container {
  @apply flex gap-8 bg-secondary py-12 px-[70px] mb-16 rounded-[2rem] rounded-tr-[0];
}

.line {
  @apply h-px bg-gray-400 w-full
}

.image-container {
  @apply w-full h-[100px] flex items-center justify-center bg-secondary bg-[#f28d70] rounded-[1rem];
}
</style>
