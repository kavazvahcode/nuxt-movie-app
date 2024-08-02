<template>
  <div class="relative rounded-xl h-full">
    <NuxtImg
      :src="getImageUrl(item.backdrop)"
      class="object-cover w-full h-52 rounded-xl"
      alt="Popular movie"
    />
    <div>
      <div
        class="absolute bottom-0 left-0 w-full p-4 bg-opacity-50 bg-gray-500/50 backdrop-blur-sm text-white rounded-b-xl"
      >
        <p class="font-semibold text-lg">{{ item.title }}</p>
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
