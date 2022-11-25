<script setup>
import { person1, person2, person3, person4, person5, person6, person7 } from "../../../assets/images";
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <section class="team">
    <div class="text-content">
      <h2>Our team</h2>
      <p>
        We bring deep experience in compliance technology, software engineering, and project finance
      </p>
    </div>
    <div class="grid grid-cols-2 sm-l:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-6 sm:gap-y-10 md:gap-y-14">
      <ProfileCard :img="person1" title="James Richards" text="CEO"/>
      <ProfileCard :img="person2" title="Cassandra Xia"  text="Head of Engineering"/>
      <ProfileCard :img="person3" title="Charles Stone"  text="Strategic Finance Lead"/>
      <ProfileCard :img="person4" title="Zoe Savellos"   text="Chief of Staff"/>
      <ProfileCard :img="person5" title="Arun Prasad"    text="Staff Software Engineer"/>
      <ProfileCard :img="person6" title="Neal Donnelly"  text="Business Development Lead"/>
      <ProfileCard :img="person7" title="Marrissa His"   text="Executive Business Partner"/>
    </div>
  </section>
</template>

<style scoped>
.team {
  @apply bg-light-green py-12 px-4
  lg:px-[120px] lg:py-24
  md:px-10 md:py-16
}

.text-content {
  @apply flex flex-col sm-l:flex-row mb-6 sm-l:mb-12 gap-4 sm-l:justify-between;
}

.text-content h2 {
  @apply text-sm-h sm-l:text-md-h-tab md:text-lg-h text-dark;
}

.text-content p {
  @apply text-md-p text-dark w-full sm-l:w-[60%] md:w-[55%] lg:w-1/2;
}

.profileCards {
  @apply flex w-full gap-[26px]
}

.advantages .profileCards:last-child{
  @apply mb-0
}
</style>
