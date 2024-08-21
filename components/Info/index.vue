<template>
  <div class="w-full h-[960px] grid grid-cols-2">
    <div class="w-full col-span-1">
      <NuxtImg
        :src="getImageUrl(item.poster)"
        class="w-full h-[960px] rounded-l-xl"
        alt="Popular movie"
      />
    </div>
    <div
      class="w-full col-span-1 p-10 flex flex-col justify-between text-white"
    >
      <div class="flex flex-col gap-12">
        <!-- {{ item.title }} -->
        <div class="flex justify-between">
          <div
            class="rounded-full w-12 h-12 backdrop-blur-sm bg-white/50 flex items-center cursor-pointer"
            @click="router.back()"
          >
            <NuxtImg
              src="/icons/back.png"
              alt="play"
              class="object-cover w-6 h-6 mx-auto my-auto"
            />
          </div>
          <div
            class="rounded-full w-12 h-12 backdrop-blur-sm bg-white/50 flex items-center cursor-pointer"
          >
            <NuxtImg
              src="/icons/heart.png"
              alt="play"
              class="object-cover w-6 h-6 mx-auto my-auto cursor-pointer"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-2">
            <NuxtLink :to="item.link" target="_blank">
              <div class="flex gap-2">
                <p class="text-5xl font-bold">{{ item.title }}</p>
                <NuxtImg src="/icons/export.png" alt="export" class="w-4 h-4" />
              </div>
            </NuxtLink>
            <p class="text-lg">{{ item.tagline }}</p>
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <p>{{ getReleaseDate(item.release) }}</p>
            <div class="flex gap-2 justify-end">
              <NuxtImg src="/icons/star.png" alt="star" class="w-6 h-6" />
              <p>{{ item.rating }}</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-lg">{{ item.description }}</p>
        </div>
        <div>
          <div class="flex gap-4">
            <div
              v-for="genre in item.genres"
              :key="genre"
              class="backdrop-blur-md bg-black/5 px-4 py-2 rounded-3xl w-fit text-lg items-center"
            >
              <p>{{ genre.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-12">
        <div class="flex justify-between">
          <div>
            <div>
              <span class="font-bold">Budget:</span> {{ item.budget }} $
            </div>
            <div>
              <span class="font-bold">Runtime:</span> {{ item.runtime }} min
            </div>
          </div>
          <div>
            <div>
              <span class="font-bold">Country:</span>
              {{ item.production_countries[0].name }}
            </div>
            <div>
              <span class="font-bold">Language:</span>
              {{ item.language.toUpperCase() }}
            </div>
          </div>
        </div>
        <div>
          <div class="flex gap-4 w-full justify-center">
            <div
              v-for="company in item.production_companies"
              :key="company.id"
              class="flex flex-col gap-4 justify-center items-center"
            >
              <NuxtImg
                v-if="company.logo_path"
                :src="getImageUrl(company.logo_path)"
                class="w-auto h-14"
              />
            </div>
          </div>
        </div>
        <div
          v-if="item.movieProviders && item.movieProviders.length > 0"
          class="flex flex-col gap-2"
        >
          <div>Places to watch:</div>
          <div class="flex gap-4">
            <div
              v-for="provider in item.movieProviders"
              :key="provider.provider_id"
              class="flex flex-col gap-4 justify-center items-center"
            >
              <NuxtImg
                v-if="provider.logo_path"
                :src="getImageUrl(provider.logo_path)"
                class="w-auto h-14 rounded-xl opacity-70"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="backdrop-blur-md bg-black/5 px-4 py-2 rounded-3xl w-fit text-lg items-center"
            @click="router.push('/watch/' + item.imdb)"
          >
            Watch now
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from '@/utils/helper'
import { getReleaseDate } from '@/utils/helper'

const router = useRouter()

const props = defineProps({
  item: {
    type: Array,
    required: true,
  },
})

// onMounted(() => {
//   const getStream = async (imdbId) => {
//     console.log('Checking streaming services for: ', imdbId)
//     try {
//       // const response = await fetch(`https://vidsrc.net/api/?imdb=${imdbId}`)
//       const response = await fetch(`https://vidsrc.net/embed/${imdbId}`)

//       const data = await response.json()
//       return data
//     } catch (error) {
//       console.error(error)
//       return []
//     } finally {
//       console.log('Streaming services: ', data)
//     }
//   }

//   getStream(props.item.imdb)
// })

const openStream = () => {
  router.push({ to: 'watch', params: { imdbId: props.item.imdb } })
}
</script>
