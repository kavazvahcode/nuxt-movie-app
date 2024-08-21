<template>
  <MoviePageLayout>
    <div class="">
      <Info :item="movieData" />
    </div>
  </MoviePageLayout>
</template>

<script setup>
import MoviePageLayout from '@/layouts/MoviePageLayout.vue'
import Info from '@/components/Info'

definePageMeta({
  layout: 'MoviePageLayout',
})

const route = useRoute()
console.log('Movie id: ', route.params.id)

const movieDetails = await useFetch(`/api/movies/details/${route.params.id}`)
console.log('Movie details: ', movieDetails.data)

const providers = await useFetch(
  `/api/movies/providers/query?id=${route.params.id}`
)
console.log('Providers: ', providers.data)

const movieData = {
  id: movieDetails.data.value.id,
  title: movieDetails.data.value.title,
  poster: movieDetails.data.value.poster_path,
  backdrop: movieDetails.data.value.backdrop_path,
  description: movieDetails.data.value.overview,
  rating: movieDetails.data.value.vote_average,
  release: movieDetails.data.value.release_date,
  genres: movieDetails.data.value.genres,
  link: movieDetails.data.value.homepage,
  budget: movieDetails.data.value.budget,
  language: movieDetails.data.value.original_language,
  runtime: movieDetails.data.value.runtime,
  production_companies: movieDetails.data.value.production_companies.filter(
    (company) => company.logo_path !== null
  ),
  production_countries: movieDetails.data.value.production_countries,
  tagline: movieDetails.data.value.tagline,
  country: movieDetails.data.value.origin_country[0],
  movieProviders: providers.data.value?.results?.US?.rent,
  imdb: movieDetails.data.value.imdb_id,
}

console.log('Movie data: ', movieData)
</script>
