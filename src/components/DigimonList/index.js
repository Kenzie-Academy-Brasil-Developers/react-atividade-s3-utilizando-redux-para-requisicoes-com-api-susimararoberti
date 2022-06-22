import { useSelector } from "react-redux";
import DigimonCard from "../Digimon";
import { Container } from "./styles";

function DigimonList() {
  const { digimons } = useSelector((state) => state);

  return (
    <Container>
      {digimons.map((digimon, index) => (
        <DigimonCard key={index} digimon={digimon.name} img={digimon.img} />
      ))}
    </Container>
  );
}

export default DigimonList;
