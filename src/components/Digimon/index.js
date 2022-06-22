import { Container } from "./styles";

function DigimonCard({ digimon, img }) {
  return (
    <Container>
      <h2>{digimon}</h2>
      <img src={img} alt={digimon} />
    </Container>
  );
}

export default DigimonCard;
