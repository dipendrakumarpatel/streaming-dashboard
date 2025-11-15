import Image from 'next/image';
import { Movie } from '../../types/movie';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className="relative h-72 md:h-96">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute bottom-4 left-4">{/* overlay text */}</div>
    </section>
  );
}
