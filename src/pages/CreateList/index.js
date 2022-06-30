import axios from "axios";
import { useEffect, useState } from "react";

export function CreateList() {
  const [form, setForm] = useState({
    owner: "",
    nameOfYourList: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesList = await axios.get("https://ironrest.herokuapp.com/");
        console.log(moviesList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Crie a sua lista:</h1>

      <form onSubmit={handleChange} className="d-flex flex-column">
        <div className="d-flex flex-column" m-15>
          <label htmlFor="owner-input">Seu nome:</label>
          <input
            id="owner-input"
            value={form.owner}
            type="string"
            name="owner"
            onChange={handleChange}
          />
          <label htmlFor="nameOfYourList-input" onChange={handleChange}>
            Nome da sua lista:
          </label>
          <input
            id="nameOfYourList-input"
            value={form.description}
            type="string"
            name="nameOfYourList"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column" m-15>
          <h2>Selecione abaixo os filmes da sua lista</h2>
          <select>
            <option>Array de todos os filmes para selecionar</option>
          </select>
          <button>Incluir filme</button>

          <button>Cadastrar lista</button>
        </div>
      </form>
    </>
  );
}
