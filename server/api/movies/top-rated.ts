import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async () => {
  const movies = await fetchApi('movie/top_rated?language=en-US', null)
  return movies
})
