import { useState } from "react";

export function CreateList() {
  const [form, setForm] = useState({
    owner: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  return (
    <>
      <h1>Crie a sua lista:</h1>

      <form>
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

        {/* <h2></h2> Neste caso a tag <h2> seria para que ? */}
      </form>
    </>
  );
}
