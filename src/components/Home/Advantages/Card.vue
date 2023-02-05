<script setup lang="ts">
import router from "@/router";
import Button from "@/components/global/Button.vue";
import { arrow } from "@/assets/images";

interface CardProps {
  img: string,
  title: string,
  text: string,
  path: string,
}

const {img, title, text, path} = defineProps<CardProps>()
</script>

<template>
    <section class="max-w-[1000px] rounded-2xl mx-auto bg-white
                    mx-4 md:mx-auto">
      <div class="flex flex-col tablet-portrait:flex-row m-auto">
        <div class="flex flex-col justify-center p-4 sm:p-8 lg:w-1/2
                    tablet-portrait:min-h-[400px] tablet-portrait:w-1/2">
          <h2 class="text-sm-h sm-l:text-md-h-tab md:text-xmd-h mb-4">{{ title }}</h2>
          <p class="tablet-portrait:mt-auto text-sm-p md:text-lg-p">{{ text }}</p>
          <Button
            class="py-[13px] px-[32px] mt-8 w-[190px] justify-between"
            text="Learn more"
            variant="black"
            @click="router.push({path})"
            :img="arrow"
          />
        </div>
        <img
          class="self-center sm:self-end tablet-portrait:max-h-full rounded-2xl
                max-h-[400px] sm:max-h-[550px] tablet-portrait:max-h-auto tablet-portrait:-mt-[28px]"
          :src="img"
        />
      </div>
    </section>
</template>
