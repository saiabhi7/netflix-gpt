import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEnglishMovies } from "../store/slices/moviesSlice";
import ENGLISH_MOVIES from "../utils/api-data-english.json";

const useEnglishMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const englishMoviesList = ENGLISH_MOVIES.results;
    dispatch(addEnglishMovies(englishMoviesList));
  }, []);
};

export default useEnglishMovies;
