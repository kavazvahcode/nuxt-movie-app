import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async () => {
  const movies = await fetchApi('movie/popular', null)
  return movies
})
