<script setup lang="ts">
import SolutionPageLayout from "@/components/global/SolutionPageLayout/SolutionPageLayout.vue";
import {taxesPageContent} from "@/data";
</script>

<template>
  <solution-page-layout v-bind="taxesPageContent"/>
</template>
