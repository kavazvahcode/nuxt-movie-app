import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async () => {
  const movies = await fetchApi('trending/movie/day?language=en-US', null)
  return movies
})
