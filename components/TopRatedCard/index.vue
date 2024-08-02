<template>
  <div class="relative rounded-xl h-full w-64">
    <NuxtImg
      :src="getImageUrl(item.backdrop)"
      class="object-cover h-72 rounded-xl"
      alt="Popular movie"
    />
    <div>
      <div
        class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-b from-transparent to-black bg-opacity-50 text-white rounded-b-xl flex flex-col justify-end h-full gap-2"
      >
        <div
          class="backdrop-blur-md bg-black/10 px-4 py-2 rounded-3xl w-fit text-lg items-center"
        >
          <p>{{ item.genres }}</p>
        </div>
        <p class="font-semibold text-xl">{{ item.title }}</p>
        <p class="font-light">{{ transformDescription(item.description) }}</p>
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

// console.log('Received item:', item)

const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`
}

const text =
  'As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.'
const transformDescription = (text) => {
  return text.length > 100 ? `${text.slice(0, 60)}...` : text
}
</script>
