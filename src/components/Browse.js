import React, { useEffect } from "react";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import HomeVideo from "./HomeVideo";
import useTeluguMovies from "../hooks/useTeluguMovies";
import useEnglishMovies from "../hooks/useEnglishMovies";
import Suggestions from "./Suggestions";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";
import LanguageSwitch from "./LanguageSwitch";

const Browse = () => {
  const switchToGPT = useSelector((store) => store.gpt.switchToGPT);
  useTeluguMovies();
  useEnglishMovies();

  return (
    <>
      <div className="flex justify-center">
        <Logo />
        <UserProfile />
      </div>
      {switchToGPT ? (
        <div className="bg-background-image object-cover -z-10 w-screen h-screen">
          <GPTSearchPage />
        </div>
      ) : (
        <div className="">
          <HomeVideo />
          <Suggestions />
        </div>
      )}
    </>
  );
};

export default Browse;
