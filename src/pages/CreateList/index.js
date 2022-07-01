import axios from "axios";
import { useEffect, useState } from "react";

export function CreateList() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  const [state, setState] = useState({
    name: "",
    nameOfYourList: "",
    moviesList: [],
  });
  console.log(state);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesList = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=d822ae14da7fa354faf5580e16c68dd5"
        );
        setMovies(moviesList.data.results);
        console.log(moviesList.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Crie a sua lista:</h1>

      <form className="d-flex flex-column">
        <div className="d-flex flex-column">
          <label htmlFor="owner-input">Seu nome:</label>
          <input
            name="name"
            id="owner-input"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="nameOfYourList-input">Nome da sua lista:</label>
          <input
            name="nameOfYourList"
            id="nameOfYourList-input"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <h2>Selecione abaixo os filmes da sua lista</h2>
          {movies.map((currentMovie) => {
            return (
              <>
                <p>{currentMovie.original_title}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setState({
                      ...state,
                      moviesList: [...state.moviesList, currentMovie],
                    });
                  }}
                >
                  Incluir filme
                </button>
              </>
            );
          })}

          <button>Cadastrar lista</button>
        </div>
      </form>
    </>
  );
}
