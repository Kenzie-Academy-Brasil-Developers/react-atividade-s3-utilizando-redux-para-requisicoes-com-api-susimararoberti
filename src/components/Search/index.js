import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from "../../store/modules/digimons/thunks";
import { Container, Input } from "./styles";

function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <Container>
      <h1>Procure pelo seu Digimon!</h1>
      <Input>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Procure seu Digimon..."
        />
        <button onClick={() => handleSearch()}>Pesquisar</button>
      </Input>
      {error && <p> Este Digimon não existe! </p>}
    </Container>
  );
}

export default Search;
