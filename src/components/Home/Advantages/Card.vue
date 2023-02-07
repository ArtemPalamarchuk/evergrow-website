<script lang="ts">
import router from "@/router";
import Button from "@/components/global/Button.vue";
import { arrow } from "@/assets/images";

export default {
  components: {Button},
  props: {
    img: String,
    img1: String,
    title: String,
    text: String,
    path: String,
  },
  setup(){
    return {
      router,
      arrow,
    }
  },
  computed: {
    classes(){
      if(this.title === 'Banks & financial institutions'){
        return `max-h-[350px] md:max-h-[550px]
                sm-l:translate-x-[-100px]
                sm:w-auto`
      }
    },
  }
}
</script>

<template>
    <section class="max-w-[1000px] rounded-2xl mx-auto bg-white
                    mx-4 md:mx-auto overflow-hidden">
      <div class="flex flex-col sm-l:flex-row justify-between m-auto overflow-hidden">
        <div class="flex flex-col shrink-0 justify-between p-4 sm:p-8 z-2
                    sm-l:min-h-[400px]  sm-l:w-1/2">
          <h2 class="sm:w-auto text-sm-h sm-l:text-md-h-tab md:text-xmd-h mb-4">{{ title }}</h2>
          <p class="sm-l:mt-auto text-md-p md:text-lg-p">{{ text }}</p>
          <Button
            class="py-[13px] px-[32px] mt-8 w-[190px] justify-between"
            text="Learn more"
            variant="black"
            @click="router.push({path})"
            :img="arrow"
          />
        </div>
        <img
          :class="classes"
          class="self-center sm:self-end rounded-2xl max-h-[400px] sm:max-h-[550px] sm:max-h-full
                 sm:max-h-auto hidden sm:flex
                 sm:-mt-[28px]"
          :src="img"
        />
        <img
          class="self-end rounded-2xl
                max-h-[400px]
                sm:hidden object-cover"
          :src="img1"
        />
      </div>
    </section>
</template>
