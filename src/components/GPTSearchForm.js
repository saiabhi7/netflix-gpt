import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { LANGUAGE_TEXT } from "../utils/languageConstants";
import openai from "../utils/openai";

const GPTSearchForm = () => {
  const lang = useSelector((store) => store.lang.lang);
  const searchText = useRef();

  const handleGPTSearch = async () => {
    const gptSearchText =
      "Act as Movie Recommendation System and suggest 10 movies for : " +
      searchText.current.value;
    const gptResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearchText }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResponse.choices);
  };

  return (
    <div className="w-full mt-[40%] md:m-[8%] md:w-1/3">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black rounded-full w-full relative flex justify-center items-center bg-gradient-to-r from-purple-900 to-red-900"
      >
        <input
          ref={searchText}
          className="border-black w-[99%] m-2 p-4 rounded-full text-2xl font-semibold"
          type="text"
          placeholder={LANGUAGE_TEXT[lang].gptPlaceholderText}
        />
        <button
          onClick={handleGPTSearch}
          className="absolute bg-purple-400 text-white p-2 rounded-full right-5 top-4 text-2xl hover:scale-110 ease-in-out duration-500"
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default GPTSearchForm;
