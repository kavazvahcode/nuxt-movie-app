import { genres } from '@/utils/data'

const getGenreNames = (genreIds) => {
  return genreIds
    .map((id) => {
      const genre = genres.find((g) => g.id === id)
      return genre ? genre.name : null
    })
    .filter((name) => name !== null)
}

const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`
}

const getReleaseDate = (date) => {
  const releaseDate = new Date(date)
  return releaseDate.toDateString()
}

export { getGenreNames, getImageUrl, getReleaseDate }
