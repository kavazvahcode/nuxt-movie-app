<template>
  <HomepageLayout>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-3 flex flex-col gap-8">
        <Search />
        <Popular :popular="popularMoviesData" />
      </div>
      <div class="col-span-9 flex flex-col gap-8">
        <Header />
        <Trending :movies="trendingMoviesData" />
        <TopRated :topRated="topRatedData" />
      </div>
    </div>
  </HomepageLayout>
</template>

<script setup>
import Header from '@/components/Header'
import Trending from '@/components/Trending'
import HomepageLayout from '@/layouts/HomepageLayout.vue'
import Search from '@/components/Search'
import Popular from '@/components/Popular'
import TopRated from '@/components/TopRated'
import { genres } from '../utils/data.js'

definePageMeta({
  layout: 'HomepageLayout',
})

const trendingMovies = await useFetch('/api/movies/trending')
const popularMovies = await useFetch('/api/movies/popular')
const topRated = await useFetch('/api/movies/top-rated')

console.log('Popular movies: ', popularMovies.data)
console.log('top rated: ', topRated.data)

const getGenreNames = (genreIds) => {
  return genreIds
    .map((id) => {
      const genre = genres.find((g) => g.id === id)
      return genre ? genre.name : null
    })
    .filter((name) => name !== null)
}

const trendingMoviesData = trendingMovies.data.value.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.poster_path,
  backdrop: movie.backdrop_path,
  description: movie.overview,
  rating: movie.vote_average,
  release: movie.release_date,
  genres: getGenreNames(movie.genre_ids),
}))

const popularMoviesData = popularMovies.data.value.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.poster_path,
  backdrop: movie.backdrop_path,
  description: movie.overview,
  rating: movie.vote_average,
  release: movie.release_date,
  genres: getGenreNames(movie.genre_ids),
}))

const topRatedData = topRated.data.value.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.poster_path,
  backdrop: movie.backdrop_path,
  description: movie.overview,
  rating: movie.vote_average,
  release: movie.release_date,
  genres: getGenreNames(movie.genre_ids)[0],
}))
</script>

<style>
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ccc;
  visibility: hidden;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb:hover {
  visibility: visible;
}
</style>
