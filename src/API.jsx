import axios from "axios";

const API_KEY = "922ed7415d6b35180deeedf729fa2b77";

export async function getPopularMovies() {
  const resultData = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return resultData.data.results;
}
export async function getDetails(id) {
  const resultData = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return resultData.data;
}
