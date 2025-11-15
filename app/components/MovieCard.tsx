'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="relative w-48 cursor-pointer transition-transform duration-200 hover:scale-105 group">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={192}
          height={288}
          className="rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-200 rounded flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 text-white text-center p-2">
            <h3 className="font-semibold text-sm mb-1">{movie.title}</h3>
            <p className="text-xs">{movie.overview.slice(0, 80)}...</p>
            <div className="flex items-center justify-center mt-2">
              <span className="text-yellow-400">⭐</span>
              <span className="ml-1 text-xs">{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
