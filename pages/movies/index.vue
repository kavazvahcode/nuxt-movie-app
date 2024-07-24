<template>
  <div>This is movie page</div>
</template>

<script>
import { getTrendingMovies } from '@/server/api/movies/search'
const router = useRoute()
const route = router.path === '/movies'

const url = computed(() => {
  //if url includes 'movie' then return true
  if (router.path.includes('movie')) {
    return `api/movies/`
  }
})

// console.log(url.value)
</script>
