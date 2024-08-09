import React from "react";
import {
  CardContainer,
  Content,
  CharacterContainer,
  EventsContainer,
  SeriesContainer,
} from "./styles";

import { ICharacter } from "../../interfaces/character";

const Card: React.FC<{ character: ICharacter }> = ({ character }) => {
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <CardContainer>
      <Content>
        <CharacterContainer>
          <img src={imageUrl} alt="personagem" />
          <p>{character.name}</p>
        </CharacterContainer>
        <SeriesContainer>
          {character.series.items.map((serie, index) => (
            <p key={index}>{serie.name}</p>
          ))}
        </SeriesContainer>
        <EventsContainer>
          {character.comics.items.map((comic, index) => (
            <p key={index}>{comic.name}</p>
          ))}
        </EventsContainer>
      </Content>
    </CardContainer>
  );
};

export default Card;
