import { fetchMovieById } from '../../../lib/tmdb';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const data = await fetchMovieById(params.id);
  // render details
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
    </div>
  );
}
