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

    <div class="profileCards flex flex-col">
      <div class="flex justify-between mb-16">
        <ProfileCard :img="person1" title="James Richards" text="CEO"/>
        <ProfileCard :img="person2" title="Cassandra Xia"  text="Head of Engineering"/>
        <ProfileCard :img="person3" title="Charles Stone"  text="Strategic Finance Lead"/>
        <ProfileCard :img="person4" title="Zoe Savellos"   text="Chief of Staff"/>
      </div>
      <div class="flex justify-between px-[155px]">
        <ProfileCard :img="person5" title="Arun Prasad"    text="Staff Software Engineer"/>
        <ProfileCard :img="person6" title="Neal Donnelly"  text="Business Development Lead"/>
        <ProfileCard :img="person7" title="Marrissa His"   text="Executive Business Partner"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  @apply py-24 px-[120px] bg-light-green;
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

.profileCards {
  @apply flex w-full gap-[26px] mb-16
}

.advantages .profileCards:last-child{
  @apply mb-0
}
</style>
