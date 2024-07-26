import React, { useRef, useState } from "react";
import SuggestedMovies from "./SuggestedMovies";

const SuggestedMovieCategories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (margin) => {
    console.log(scrollPosition);
    const newScrollPosition = scrollPosition + margin;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="-mt-96 md:-mt-64 ml-6 md:ml-12 absolute overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold md:text-4xl text-2xl text-white">
          Telugu Movies
        </h1>
        <div className="flex gap-3 md:text-4xl text-2xl m-2">
          <div onClick={() => handleScroll(-150)} className="cursor-pointer">
            ⬅️
          </div>
          <div onClick={() => handleScroll(150)} className="cursor-pointer">
            ➡️
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-scroll scroll scroll-smooth scrollbar-hide"
      >
        <SuggestedMovies />
      </div>
    </div>
  );
};

export default SuggestedMovieCategories;
