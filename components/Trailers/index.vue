<template>
  <div
    class="bg-white/5 backdrop-blur-sm rounded-3xl px-6 py-3 text-white flex flex-col gap-6 w-full h-[360px] overflow-y-auto"
  >
    <div class="flex gap-2">
      <p class="font-bold text-lg">Promos</p>
    </div>
    <div class="flex flex-col gap-6 overflow-y-auto">
      <div v-for="item in popular" :key="item.id" class="flex flex-col gap-2">
        <TrailerCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TrailerCard from '@/components/TrailerCard'

defineProps({
  popular: {
    type: Array,
    required: true,
  },
})
</script>
