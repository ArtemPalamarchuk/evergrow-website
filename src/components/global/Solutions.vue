<template>
  <ul class="solutions">
    <li><router-link to="/sponsors">For project sponsors</router-link></li>
    <li><router-link to="/net-zero">For corporate net-zero</router-link></li>
    <li><router-link to="/contractors">For EPCs and contractors</router-link></li>
    <li><router-link to="/tax-equity">For tax equity</router-link></li>
  </ul>
</template>

<style scoped>
  li {
    @apply text-md-i font-urbanist-sb mb-4
  }

  li:last-child {
    @apply mb-0
  }
</style>