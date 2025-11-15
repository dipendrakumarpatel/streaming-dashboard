'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-red-600 text-2xl font-bold">
          Netflix
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/tv-shows" className="text-white hover:text-gray-300 transition">
            TV Shows
          </Link>
          <Link href="/movies" className="text-white hover:text-gray-300 transition">
            Movies
          </Link>
          <Link href="/my-list" className="text-white hover:text-gray-300 transition">
            My List
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/tv-shows" className="text-white hover:text-gray-300 transition">
              TV Shows
            </Link>
            <Link href="/movies" className="text-white hover:text-gray-300 transition">
              Movies
            </Link>
            <Link href="/my-list" className="text-white hover:text-gray-300 transition">
              My List
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
