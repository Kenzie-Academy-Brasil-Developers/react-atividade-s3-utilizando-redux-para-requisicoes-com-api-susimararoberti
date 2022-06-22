import { useSelector } from "react-redux";

function DigimonList() {
  const { digimons } = useSelector((state) => state);

  return (
    <article>
      <ul>
        {digimons.map((digimon, index) => (
          <li key={index}>{digimon}</li>
        ))}
      </ul>
    </article>
  );
}

export default DigimonList;
