<script setup lang="ts">
import SolutionPageLayout from "@/components/global/SolutionPageLayout/SolutionPageLayout.vue";
import {banksPageContent} from "@/data";
</script>

<template>
  <solution-page-layout v-bind="banksPageContent"/>
</template>
