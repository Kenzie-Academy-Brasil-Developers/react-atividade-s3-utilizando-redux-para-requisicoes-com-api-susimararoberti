function DigimonCard({ digimon, img }) {
  return (
    <article>
      <h2>{digimon}</h2>
      <img src={img} alt={digimon} />
    </article>
  );
}

export default DigimonCard;
