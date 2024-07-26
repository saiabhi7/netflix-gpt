import React from "react";

const SuggestedMovies = () => {
  let posters = [
    "./posters/img1.jpeg",
    "./posters/img2.jpeg",
    "./posters/img3.jpeg",
    "./posters/img4.jpeg",
    "./posters/img5.jpeg",
    "./posters/img6.jpg",
    "./posters/img7.jpg",
    "./posters/img8.jpg",
    "./posters/img9.jpg",
    "./posters/img10.jpg",
  ];
  return (
    <div className="flex justify-between gap-5 mt-5">
      {posters.map((poster) => (
        <img
          key={poster}
          src={poster}
          alt="image"
          className="md:w-72 md:h-72 w-36 h-36 cursor-pointer hover:scale-110 ease-in-out duration-500"
        />
      ))}
    </div>
  );
};

export default SuggestedMovies;
