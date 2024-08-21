import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const movie = await fetchApi(`/movie/${query.id}/watch/providers`, null)
  return movie
})
