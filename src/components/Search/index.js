import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <section>
      <h1>Procure pelo seu Digimon!</h1>
      <article>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Procure seu Digimon..."
        />
        <button onClick={() => handleSearch()}>Pesquisar</button>
        <div>{error && <p> Nome inválido! </p>}</div>
      </article>
    </section>
  );
}

export default Search;
