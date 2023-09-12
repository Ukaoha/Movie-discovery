// Card.tsx (Card component)
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '@/Config/config';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function Cards({ movies }: { movies: Movie[] }) {
  return (
    <div className='w-4/5 m-auto'>
      <h2 className="text-2xl font-bold mt-6 mb-4">Featured Movie</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          // <Link href={`/movies/${movie.id}`} key={movie.id}>
            <a>
              <div
                className="bg-white border border-gray-200 p-4 rounded-lg text-center"
                data-testid="movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto mb-2"
                  data-testid="movie-poster"
                />
                <p className="font-semibold" data-testid="movie-title">
                  {movie.title}
                </p>
                <p className="text-gray-600" data-testid="movie-release-date">
                  {movie.release_date}
                </p>
              </div>
            </a>
          // </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
