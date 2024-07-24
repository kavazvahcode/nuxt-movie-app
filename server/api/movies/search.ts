import { globalHeaders } from './headers'

const config = useRuntimeConfig()

const fetchApi = (endpoint: string, query: string | null) => {
  const url = `${config.apiBaseUrl}/${endpoint}${
    query ? `?query=${query}` : ''
  }`
  return $fetch(url, {
    method: 'GET',
    headers: globalHeaders,
  })
}

export default defineEventHandler(async () => {
  const movies = await fetchApi('trending/movie/day?language=en-US', null)
  return movies
})
