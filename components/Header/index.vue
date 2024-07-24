<template>
  <div class="container mx-auto">
    <div class="flex w-full justify-between items-center font-bold">
      <nuxt-link to="/">
        <div
          :class="`${
            isActive('')
              ? 'bg-white/5   backdrop-blur-sm rounded-3xl hover:bg-white/20'
              : 'hover:text-gray-800 '
          }  px-6 py-3 text-white cursor-pointer`"
        >
          <p>{{ t('header.movies') }}</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/tv-shows">
        <div
          :class="`${
            isActive('tvShows')
              ? 'bg-white/5   backdrop-blur-sm rounded-3xl hover:bg-white/20'
              : 'hover:text-gray-800 '
          }  px-6 py-3 text-white cursor-pointer`"
        >
          <p>{{ t('header.tvShows') }}</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/animation">
        <div
          :class="`${
            isActive('animation')
              ? 'bg-white/5   backdrop-blur-sm rounded-3xl hover:bg-white/20'
              : 'hover:text-gray-800'
          }  px-6 py-3 text-white cursor-pointer`"
        >
          <p>{{ t('header.animation') }}</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/mistery">
        <div
          :class="`${
            isActive('mistery')
              ? 'bg-white/5   backdrop-blur-sm rounded-3xl hover:bg-white/20'
              : 'hover:text-gray-800'
          }  px-6 py-3 text-white cursor-pointer`"
        >
          <p>{{ t('header.mistery') }}</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/more">
        <div
          :class="`${
            isActive('more')
              ? 'bg-white/5   backdrop-blur-sm rounded-3xl hover:bg-white/20'
              : 'hover:text-gray-800'
          }  px-6 py-3 text-white cursor-pointer`"
        >
          <p>{{ t('header.more') }}</p>
        </div>
      </nuxt-link>
      <div class="bg-white/5 backdrop-blur-sm rounded-[50%] px-4 py-3">
        <font-awesome :icon="['far', 'bell']" class="text-white" />
      </div>
      <div class="bg-white/5 backdrop-blur-sm rounded-3xl px-2 py-1">
        <div class="flex justify-center items-center gap-4">
          <nuxt-img
            src="/images/user.jpg"
            alt="user"
            class="w-10 h-10 rounded-[50%]"
          />
          <div class="pr-2">
            <p class="text-white text-md">Arfi Maulana</p>
            <p class="text-xs font-normal text-gray-200">@arfimaulana</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// import { getTrendingMovies } from '@/server/api/movies/search'
const { t } = useI18n()

const current = ref('')

const changeCurrent = (newCurrent: string) => {
  current.value = newCurrent
}

const isActive = (item: string) => {
  return item === current.value
}
</script>
