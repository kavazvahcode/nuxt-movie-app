<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between items-center text-white">
      <p class="font-bold text-2xl">Top rated</p>
      <p
        class="bg-white/5 backdrop-blur-sm rounded-3xl hover:bg-white/20 px-6 py-3 text-white cursor-pointer"
      >
        See all
      </p>
    </div>
    <div class="flex justify-between items-center gap-2">
      <swiper
        ref="swiperRef"
        :slides-per-view="4"
        :space-between="30"
        @swiper="onSwiper"
        :loop="true"
        :modules="[Navigation]"
        class="w-full h-full relative"
      >
        <swiper-slide v-for="item in topRated" :key="item.id">
          <TopRatedCard :item="item" />
        </swiper-slide>
      </swiper>
      <div
        class="backdrop-blur-md bg-black/20 p-4 rounded-full w-fit text-lg items-center cursor-pointer"
        @click="swiperNextSlide"
      >
        <NuxtImg
          src="/icons/next.png"
          alt="next-movie"
          class="object-cover w-6 h-6"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopRatedCard from '@/components/TopRatedCard'
import { ref } from 'vue'

// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

defineProps({
  topRated: {
    type: Array,
    required: true,
  },
})

const swiperInstance = ref()
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}
const swiperNextSlide = () => {
  swiperInstance.value.slideNext()
}
</script>
