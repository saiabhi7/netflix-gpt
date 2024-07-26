import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHomeMovie, addTeluguMovies } from "../store/slices/moviesSlice";
import TELUGU_MOVIES from "../utils/api-data-telugu.json";

const useTeluguMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const teluguMoviesList = TELUGU_MOVIES.results;
    dispatch(addTeluguMovies(teluguMoviesList));
    dispatch(addHomeMovie(teluguMoviesList[0]));
  }, []);
};

export default useTeluguMovies;
