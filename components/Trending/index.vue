<template>
  <div class="rounded-2xl w-[1200px] h-[700px] relative">
    <swiper
      ref="swiperRef"
      :slides-per-view="1"
      @swiper="onSwiper"
      :loop="true"
      :modules="[Navigation]"
      class="w-full h-full relative"
    >
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <div class="w-full h-full relative">
          <NuxtImg
            :src="getImageUrl(movie.backdrop)"
            alt="main-bg"
            class="object-cover w-full h-full rounded-3xl absolute z-0"
          />
          <div
            class="absolute w-full h-full rounded-3xl"
            style="
              background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                rgba(0, 0, 0, 0.5)
              );
            "
          >
            <div class="flex flex-col justify-between h-full p-6 text-white">
              <div class="flex justify-start">
                <div
                  class="backdrop-blur-md bg-black/20 px-4 py-2 rounded-3xl w-fit text-lg flex items-center gap-2"
                >
                  <NuxtImg
                    src="/icons/fire.png"
                    alt="trending"
                    class="object-cover w-6 h-6"
                  />
                  <p>Now trending</p>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <div
                    v-for="genre in movie.genres"
                    :key="genre"
                    class="backdrop-blur-md bg-black/20 px-4 py-2 rounded-3xl w-fit text-lg items-center"
                  >
                    <p>{{ genre }}</p>
                  </div>
                </div>
                <p class="text-5xl w-[50%] font-semibold">{{ movie.title }}</p>
                <p class="text-xl w-[50%] text-gray-300">
                  {{ movie.description }}
                </p>
                <div class="flex justify-between items-end">
                  <div class="flex gap-4">
                    <div class="pt-6">
                      <button
                        class="rounded-[30px] px-6 py-4 bg-white text-black text-xl flex gap-4 items-center"
                      >
                        <NuxtImg
                          src="/icons/play.png"
                          alt="trending"
                          class="object-cover w-6 h-6"
                        />
                        Watch
                      </button>
                    </div>
                    <div class="pt-6">
                      <button
                        class="rounded-[30px] px-6 py-4 bg-transparent text-white text-xl flex gap-4 items-center border border-white"
                      >
                        <NuxtImg
                          src="/icons/downloads.png"
                          alt="trending"
                          class="object-cover w-6 h-6"
                        />
                        Download
                      </button>
                    </div>
                  </div>
                  <div class="flex gap-4 relative">
                    <div
                      class="backdrop-blur-md bg-black/20 p-4 rounded-full w-fit text-lg items-center cursor-pointer"
                      @click="swiperPrevSlide"
                    >
                      <NuxtImg
                        src="/icons/back.png"
                        alt="next-movie"
                        class="object-cover w-6 h-6"
                      />
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-button-prev" @click="swiperPrevSlide">
        <NuxtImg
          src="/icons/back.png"
          alt="next-movie"
          class="object-cover w-6 h-6"
        />
      </div>
      <div class="swiper-button-next" @click="swiperNextSlide">
        <NuxtImg
          src="/icons/next.png"
          alt="next-movie"
          class="object-cover w-6 h-6"
        />
      </div> -->
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

defineProps({
  movies: {
    type: Array,
    required: true,
  },
})

const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`
}

const swiperInstance = ref()

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}
const swiperNextSlide = () => {
  swiperInstance.value.slideNext()
}
const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev()
}
</script>
