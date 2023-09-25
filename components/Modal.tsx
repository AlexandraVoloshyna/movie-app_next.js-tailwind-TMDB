"use client"
import Image from "next/image";
import { closeModal } from "@/redux/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {AiOutlineClose} from "react-icons/ai"


 function Modal() {
  
  const showModal = useAppSelector((state) => state.modal.showModal);
  const movie = useAppSelector((state=>state.modal.movie ))
  const dispatch = useAppDispatch();
 
  if (!showModal) {
    return null;
  }
  
  return (
    <>
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
          <div className="relative w-[60vw] mx-auto max-w-2xl max-h-[95vh] top-2 rounded-md overflow-hidden">
            <div
              className=
                  " scale-100 transform duration-300 relative flex-auto bg-neutral-900 drop-shadow-md"
            >
              {/* Close button */}
              <div
                onClick={() => {
                  dispatch(closeModal());
                }}
                className="absolute top-0.5 right-0.5  z-50 cursor-pointer  h-10 w-10 rounded-full bg-neutral-900 bg-opacity-70 flex items-center justify-center"
              >
               
                <AiOutlineClose className="text-white w-6 " />
              </div>

              <div className="relative pt-[56.25%]">
               
                <Image
              src={`https://image.tmdb.org/t/p/w500${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt="movie card"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />

               
              </div>

              {/* Movie info and description */}
              <div className="flex flex-col space-y-2 justify-between rounded-b-md bg-neutral-800 px-7 py-5 md:flex-row md:space-x-2 md:space-y-0">
                <div className="space-y-2 md:w-[80%]">
                  <div className="flex items-center space-x-2 text-sm">
                  <div className="font-bold text-sm text-orange-500">
                    {movie?.title || movie?.original_name}
                    
                  </div>
                  <div className="font-semibold text-green-400">
                      
                    {(movie?.vote_average ? (movie.vote_average * 10).toFixed(2) : 'N/A')}% Match
                      
                  </div>
                  <div className="font-bold">
                    {(movie?.release_date || movie?.first_air_date)?.slice(0,4)}
                  </div>

                  </div>
                  <p className="text-sm">
                    {movie?.overview}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Modal;