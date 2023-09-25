"use client"
import Image from "next/image";
import { Movie } from "@/types/Movie";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { useAppDispatch } from "@/redux/hooks";
import { setModalMovie, openModal } from "@/redux/modalSlice";



interface Props {
  billboard: Movie;
}

function Preview({ billboard }: Props) {
  const dispatch = useAppDispatch();
  
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            billboard?.backdrop_path || billboard?.poster_path
          }`}
          alt="banner image"
          fill
          className="object-cover"
        />
      <div className="billboard-overlay z-10"></div>
      </div>

      <div className="flex flex-col pt-24 lg:pt-44 space-y-4 lg:space-y-10 px-4">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
          {billboard?.title ||
            billboard?.name ||
            billboard?.original_name}
        </h1>

        <p
          className="max-w-xs text-xs md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg"
          style={{ textShadow: "0.5px 0.5px #dfdfdf" }}
        >
          {billboard?.overview}
        </p>

        <div className="flex space-x-2">
          <button
            className="bg-white text-black flex items-center rounded gap-x-2 px-5 py-1.5 font-semibold trasition hover:opacity-70 md:py-2.5 md:px-8 md:text-xl"
            
          >
            { <FaPlay className="w-4 text-black md:w-7" /> }
            Play
          </button>
          <button
            onClick={() => {
              dispatch(setModalMovie(billboard));
              dispatch(openModal());
            }}
            className="bg-gray-400/70 flex items-center rounded gap-x-2 px-5 py-1.5 font-semibold trasition hover:opacity-70 md:py-2.5 md:px-8 md:text-xl"
          >
            { <GrCircleInformation className="w-4 md:w-7" /> }
            More Info
          </button>
        </div>
      </div>
    </>
  );
}

export default Preview;