<template>
  <div class="relative rounded-xl h-full">
    <NuxtImg
      :src="getImageUrl(item.backdrop)"
      class="object-cover w-full h-52 rounded-xl"
      alt="Popular movie"
    />
    <div>
      <div
        class="absolute bottom-0 left-0 w-full p-4 bg-opacity-50 bg-gray-500/50 backdrop-blur-sm text-white rounded-b-xl flex justify-between items-center"
      >
        <p class="w-full font-semibold text-lg">{{ item.title }}</p>
        <div class="justify-end items-end flex">
          <NuxtLink :to="`/watch/${item.id}`">
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
