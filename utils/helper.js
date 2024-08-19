import { genres } from '@/utils/data'

const getGenreNames = (genreIds) => {
  return genreIds
    .map((id) => {
      const genre = genres.find((g) => g.id === id)
      return genre ? genre.name : null
    })
    .filter((name) => name !== null)
}

export { getGenreNames }
