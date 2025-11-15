const BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'dd85ad10976869d97d40eff498f2a38e';

export async function fetchPopular() {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch movie');
  return res.json();
}
