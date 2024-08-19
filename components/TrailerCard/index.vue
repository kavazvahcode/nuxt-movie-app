<template>
  <div class="relative rounded-xl h-22 grid grid-cols-7 items-center gap-2">
    <NuxtImg
      :src="getImageUrl(item.backdrop)"
      class="object-cover w-full h-20 rounded-xl col-span-2"
      alt="Popular movie"
    />
    <div class="w-full p-4 bg-opacity-50 text-white col-span-4">
      <p class="font-semibold text-lg">{{ item.title }}</p>
    </div>
    <div class="w-full col-span-1 justify-end items-end flex">
      <NuxtLink :to="`/movie/${item.id}`">
        <div
          class="rounded-full w-10 h-10 backdrop-blur-sm bg-white/50 flex justify-center items-center"
        >
          <NuxtImg
            src="/icons/play-white.png"
            alt="play"
            class="object-cover w-4 h-4"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`
}
</script>
