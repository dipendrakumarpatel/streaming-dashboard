import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import { fetchPopular } from '../lib/tmdb';

export default async function Home() {
  const data = await fetchPopular();
  const movies = data.results.slice(0, 10);

  return (
    <div className="bg-black min-h-screen pt-16">
      <HeroBanner movie={movies[0]} />
      <MovieRow movies={movies.slice(1)} categoryTitle="Popular on Netflix" />
    </div>
  );
}
