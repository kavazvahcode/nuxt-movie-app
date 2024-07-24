export type APIResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type Movie = {
  id: number
  title: string
  genres: {
    id: number
    name: string
  }
  release_date: string
  runtime: number | null
  overview: string
  poster_path: string
}

export type TopRated = {
  id: number
  backgrop_path: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}
