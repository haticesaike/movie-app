import axios from "axios";

const API_KEY = "922ed7415d6b35180deeedf729fa2b77";

export async function getPopularMovies() {
  let resultData = [];
  for (let i = 1; i < 6; i++) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`
    );
    resultData = [...resultData, ...data.data.results];
  }

  return resultData;
}
export async function getDetails(id) {
  const resultData = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return resultData.data;
}
