"use client"
import { Movie } from "@/types/Movie";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";

interface Props {
  title: string;
  movies: Movie[];
}

function MovieRow({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);

  
  const scrollHandler = () => {
    setIsMovedLeft(true);
    if (rowRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = rowRef.current;
      if (scrollLeft === 0) {
        setIsMovedLeft(false);
      } else {
        setIsMovedRight(true);

        const maxRight = scrollWidth - clientWidth - scrollLeft;

        if (maxRight === 0) {
          setIsMovedRight(false);
        }
      }
    }
  };

  const clickHandler = (direction: string) => {
    setIsMovedLeft(true);

    if (rowRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = rowRef.current;
      if (scrollLeft === 0) {
        setIsMovedLeft(false);
      } else {
        setIsMovedRight(true);

        const maxRight = scrollWidth - clientWidth - scrollLeft;

        if (maxRight === 0) {
          setIsMovedRight(false);
        }
      }

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 my-10 md:h-52 px-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="group relative">
        <div
          className={`flex absolute top-0 left-0 w-14 h-full bg-gradient-to-l from-neutral-900/0 to-neutral-950 z-40 opacity-0 transition group-hover:opacity-100 ${
            !isMovedLeft && "hidden"
          }`}
        >
          <FaChevronLeft
            className={`relative m-auto w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMovedLeft && "hidden"
            }`}
            onClick={() => clickHandler("left")}
          />
        </div>

        <div
          id="row"
          className="flex items-center space-x-1 overflow-x-scroll md:space-x-3 md:p-2 hideScrollbar"
          ref={rowRef}
          onScroll={() => scrollHandler()}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div
          className={`flex absolute top-0 right-0 w-14 h-full bg-gradient-to-r from-neutral-900/0 to-neutral-950 z-40 opacity-0 transition group-hover:opacity-100 ${
            !isMovedRight && "hidden"
          }`}
        >
          <FaChevronRight
            className={`relative m-auto w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMovedRight && "hidden"
            }`}
            onClick={() => clickHandler("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieRow;