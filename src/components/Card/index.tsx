import React from "react";
import {
  CardContainer,
  Content,
  CharacterContainer,
  EventsContainer,
  SeriesContainer,
  MoreIndicator,
} from "./styles";

import { ICharacter } from "../../interfaces/character";
import { useCharacters } from "../../context/Character";
import { useNavigate } from "react-router-dom";

const Card: React.FC<{ character: ICharacter }> = ({ character }) => {
  const { setCharacter } = useCharacters();
  const navigate = useNavigate();

  const handleCardClick = () => {
    setCharacter(character);
    navigate("/detalhes");
  };

  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  const seriesToShow = character.series.items.slice(0, 3);
  const hasMoreSeries = character.series.items.length > 3;

  const eventsToShow = character.comics.items.slice(0, 3);
  const hasMoreEvents = character.comics.items.length > 3;

  return (
    <CardContainer onClick={handleCardClick}>
      <Content>
        <CharacterContainer>
          <img src={imageUrl} alt={character.name} />
          <p>{character.name}</p>
        </CharacterContainer>
        <SeriesContainer>
          {seriesToShow.map((serie, index) => (
            <p key={index}>{serie.name}</p>
          ))}
          {hasMoreSeries && <MoreIndicator>...</MoreIndicator>}
        </SeriesContainer>
        <EventsContainer>
          {eventsToShow.map((comic, index) => (
            <p key={index}>{comic.name}</p>
          ))}
          {hasMoreEvents && <MoreIndicator>...</MoreIndicator>}
        </EventsContainer>
      </Content>
    </CardContainer>
  );
};

export default Card;
