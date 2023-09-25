import Link from 'next/link';
import React from 'react';



interface Props {
  visible?: boolean;
}

function MobileMenu ({ visible }:Props) {
  if (!visible) {
    return null;
  }

  return (
    <nav className="bg-black w-56 absolute top-8 left-0 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <ul className="flex flex-col gap-8">
      <li>
            <Link
               className="px-3 text-center text-white hover:underline"
               href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-3 text-center text-white hover:underline"
              href="/tvShows"
            >
            Tv Shows
            </Link>
          </li>
          <li>
            <Link
              className="px-3 text-center text-white hover:underline"
              href="/movies"
            >
            Movies
            </Link>
          </li>
          <li>
            <Link
             className="px-3 text-center text-white hover:underline"
              href="/new"
            >
            New & Popular
            </Link>
          </li>
          <li>
            <Link
             className="px-3 text-center text-white hover:underline"
              href="/list"
            >
            My List
            </Link>
          </li>
      </ul>
    </nav>
  )
}

export default MobileMenu;
