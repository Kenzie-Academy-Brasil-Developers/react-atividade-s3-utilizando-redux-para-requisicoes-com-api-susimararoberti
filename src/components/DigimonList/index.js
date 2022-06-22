import { useSelector } from "react-redux";
import DigimonCard from "../Digimon";

function DigimonList() {
  const { digimons } = useSelector((state) => state);

  return (
    <article>
      {digimons.map((digimon, index) => (
        <DigimonCard key={index} digimon={digimon.name} img={digimon.img} />
      ))}
    </article>
  );
}

export default DigimonList;
