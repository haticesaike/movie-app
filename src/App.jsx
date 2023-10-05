import LeftSide from "./components/LeftSide/index.jsx";
import RightSide from "./components/RightSide/index.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies } from "./API.jsx";
import { Input } from "@mantine/core";

function App() {
  const isMobile = window.innerWidth < 1080;
  const [movies, setMovies] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [filtredMovies, setFiltredMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const value = await getPopularMovies();
      setMovies(value);
      setSelectedMovie(value[0]);
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="container">
        <div className="top">
          <div className="search">
            <span className="material-symbols-outlined search-icon">
              search
            </span>
            <Input
              type={"search"}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setFiltredMovies(
                  movies.filter((movie) =>
                    movie.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                );
              }}
              size="md"
              placeholder="Search"
            />
          </div>
          <div className="top-container">
            <h1>
              {selectedMovie
                ? selectedMovie.title.length > 20 && isMobile
                  ? selectedMovie.title.substr(0, 19) + "..."
                  : selectedMovie.title
                : "Loading..."}
            </h1>
          </div>
        </div>
        <div className="bottom">
          <LeftSide
            movies={filtredMovies.length > 0 ? filtredMovies : movies}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
          <RightSide selectedMovie={selectedMovie} />
        </div>
      </div>
    </>
  );
}

export default App;
