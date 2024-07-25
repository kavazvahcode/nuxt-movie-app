<template>
  <div>
    <Trending :movies="trendingMovies" />
  </div>
</template>

<script setup>
import Header from '@/components/Header'
import Trending from '@/components/Trending'
import { genres } from '../utils/data.js'
const { data } = await useFetch('/api/movies/search')
console.log('Movie data:', data.value.results)
console.log('GENRES: ', genres)

const getGenreNames = (genreIds) => {
  return genreIds
    .map((id) => {
      const genre = genres.find((g) => g.id === id)
      return genre ? genre.name : null
    })
    .filter((name) => name !== null)
}

// Transoform received data like this:
const trendingMovies = data.value.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.poster_path,
  backdrop: movie.backdrop_path,
  description: movie.overview,
  rating: movie.vote_average,
  release: movie.release_date,
  genres: getGenreNames(movie.genre_ids),
}))

console.log('Transformed movie data:', trendingMovies)

// console.log(data)
</script>
