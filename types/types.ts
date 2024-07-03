export type APIResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type Movie = {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  };
  release_date: string;
  runtime: number | null;
  overview: string;
  poster_path: string;
}