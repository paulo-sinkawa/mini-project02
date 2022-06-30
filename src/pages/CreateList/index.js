import axios from "axios";
import { useEffect, useState } from "react";

export function CreateList() {
  const [form, setForm] = useState({
    owner: "",
    description: "",
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
        <div className="d-flex flex-column" mb-5>
          <label htmlFor="owner-input">Seu nome:</label>
          <input
            id="owner-input"
            value={form.owner}
            type="string"
            name="owner"
            onChange={handleChange}
          />
          <label htmlFor="description-input" onChange={handleChange}>
            Descricao:{" "}
          </label>
          <input
            id="description-input"
            value={form.description}
            type="string"
            name="description"
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}
