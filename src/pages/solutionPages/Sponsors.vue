<script setup lang="ts">
import SolutionPageLayout from "@/components/global/SolutionPageLayout/SolutionPageLayout.vue";
import {sponsorsPageContent} from "@/data";
</script>

<template>
  <solution-page-layout v-bind="sponsorsPageContent"/>
</template>
