import fetchApi from '@/server/api/fetch'

export default defineEventHandler(async (event) => {
  console.log('EVENT:', event)
  const id = event.context.params?.id ?? ''
  const movie = await fetchApi(`/movie/${id}?language=en-US`, null)
  return movie
})
