<template>
  <div
    class="bg-white/5 backdrop-blur-sm rounded-3xl px-6 py-3 text-white flex flex-col gap-6 w-full h-[700px] overflow-y-auto"
  >
    <div class="flex gap-2">
      <NuxtImg
        src="/icons/fire.png"
        alt="trending"
        class="object-cover w-6 h-6"
      />
      <p class="font-bold text-lg">Popular movies</p>
    </div>
    <div class="flex flex-col gap-6 overflow-y-auto">
      <div v-for="item in popular" :key="item.id" class="flex flex-col gap-2">
        <PopularCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PopularCard from '@/components/PopularCard'

defineProps({
  popular: {
    type: Array,
    required: true,
  },
})
</script>
