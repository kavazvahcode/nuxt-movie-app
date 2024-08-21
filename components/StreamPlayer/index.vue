<template>
  <div class="stream-player w-auto h-[880px] flex justify-center items-center">
    <iframe
      v-if="streamUrl"
      :src="streamUrl"
      class="w-full h-full rounded-lg"
      frameborder="0"
      allowfullscreen
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
    <div v-else-if="error" class="text-white text-center">
      <p class="text-xl mb-4">An error occurred while loading the stream.</p>
      <button @click="retry" class="px-6 py-2 bg-red-500 text-white rounded-lg">
        Retry
      </button>
      <button
        @click="goBack"
        class="ml-4 px-6 py-2 bg-gray-500 text-white rounded-lg"
      >
        Go Back
      </button>
    </div>
    <p v-else class="text-white">Loading stream...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  imdbId: {
    type: String,
    required: true,
  },
})

const streamUrl = ref('')
const error = ref(false)
const router = useRouter()

const getStream = async (imdbId) => {
  error.value = false
  try {
    const url = `https://vidsrc.net/embed/${imdbId}`
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      Referer: `https://vidsrc.net/embed/${imdbId}`,
    }
    const response = await fetch(url, { headers })
    const html = await response.text()
    const iframeUrl = html.match(/src="([^"]+)"/)[1]
    streamUrl.value = iframeUrl
  } catch (err) {
    console.error('Error fetching stream:', err)
    error.value = true
  }
}

const retry = () => {
  getStream(props.imdbId)
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  getStream(props.imdbId)
})
</script>

<style scoped>
.stream-player {
  background-color: #000;
}
</style>
