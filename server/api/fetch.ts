import { globalHeaders } from '@/server/api/headers'

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

export default fetchApi
