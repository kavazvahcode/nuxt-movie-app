<template>
  <div>
    <Trending />
  </div>
</template>

<script setup>
import Header from '@/components/Header'
import Trending from '@/components/Trending'
const { data } = await useFetch('/api/movies/search')
console.log('Movie data:', data)

// console.log(data)
</script>
