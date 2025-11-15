'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../../types/movie';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto py-4">
        {movies.map(m => (
          <Link key={m.id} href={`/movie/${m.id}`} className="min-w-[150px] block">
            <Image src={`https://image.tmdb.org/t/p/w342${m.poster_path}`} alt={m.title} width={200} height={300} />
          </Link>
        ))}
      </div>
    </section>
  );
}
