import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async () => {
  const movies = await fetchApi('movie/now_playing?language=en-US', null)
  return movies
})
