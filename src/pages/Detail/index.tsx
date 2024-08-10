import React from "react";
import { useCharacters } from "../../context/Character";

const Details: React.FC = () => {
  const { character } = useCharacters();

  if (!character) {
    return <p>Nenhum personagem selecionado.</p>;
  }

  return (
    <div>
      ola
      {/* <h1>{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      /> */}
      {/* <p>{character.description || "Descrição não disponível."}</p> */}
      {/* Outros detalhes do personagem */}
    </div>
  );
};

export default Details;
