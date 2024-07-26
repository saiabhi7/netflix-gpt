import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const HomeVideoInfo = () => {
  const homeMovieDetails = useSelector((store) => store.movies?.homeMovie);

  return (
    <div className="bg-gradient-to-r from-black text-white bg-opacity-80 absolute h-screen">
      <div className="p-36 px-12 mt-20 md:mt-36">
        <h1 className="font-bold text-2xl md:text-6xl">
          {homeMovieDetails?.title}
        </h1>
        <p className="hidden md:inline-block w-1/3 text-lg py-3">
          {homeMovieDetails?.overview}
        </p>
        <div className="w-full md:w-1/3 flex justify-start gap-10 py-5">
          <button className="bg-white text-black text-sm md:text-2xl font-semibold rounded-lg w-1/2 md:py-3 md:w-1/4 md:h-15">
            ▶️ Play
          </button>
          <button className="bg-gray-600 text-sm md:text-2xl font-semibold rounded-lg w-1/2 md:py-3 md:w-1/4 md:h-15">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoInfo;
