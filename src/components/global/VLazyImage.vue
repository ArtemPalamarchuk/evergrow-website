<!--<script>-->
<!--import VLazyImage from "v-lazy-image";-->

<!--export default {-->
<!--  components: {VLazyImage},-->
<!--  props: {-->
<!--    src: String,-->
<!--    srcPlaceholder: String,-->
<!--    blurLevel: {-->
<!--      type: Number,-->
<!--      default: 30-->
<!--    },-->
<!--    duration: {-->
<!--      type: Number,-->
<!--      default: 700-->
<!--    }-->
<!--  },-->
<!--  data: () => ({ rate: 1 }),-->
<!--  computed: {-->
<!--    deviation() {-->
<!--      return this.blurLevel * this.rate;-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    animate() {-->
<!--      const start = Date.now() + this.duration;-->

<!--      const step = () => {-->
<!--        const remaining = start - Date.now();-->

<!--        if (remaining < 0) {-->
<!--          this.rate = 0;-->
<!--        } else {-->
<!--          this.rate = remaining / this.duration;-->
<!--          requestAnimationFrame(step);-->
<!--        }-->
<!--      };-->

<!--      requestAnimationFrame(step);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="tablet-portrait:max-h-full tablet-portrait:w-1/2">-->
<!--    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter hidden">-->
<!--      <defs>-->
<!--        <filter id="blur">-->
<!--          <feGaussianBlur in="SourceGraphic" :stdDeviation="deviation" />-->
<!--        </filter>-->
<!--      </defs>-->
<!--    </svg>-->
<!--    <v-lazy-image-->
<!--      :src="src"-->
<!--      :src-placeholder="srcPlaceholder"-->
<!--      @load="animate"-->
<!--    ></v-lazy-image>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.filter {-->
<!--  display: none;-->
<!--}-->

<!--.v-lazy-image {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--  filter: url("#blur");-->
<!--}-->
<!--</style>-->


<script>
import VLazyImage from "v-lazy-image";

export default {
  components: { VLazyImage },
  props: {
    src: String,
    srcPlaceholder: String,
  },
};
</script>

<template>
  <v-lazy-image
    :src="src"
    :src-placeholder="srcPlaceholder"
  />
</template>

<style>
.v-lazy-image {
  max-height: 100%;
  object-fit: cover;
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

