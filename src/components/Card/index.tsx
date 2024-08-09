import React from "react";
import {
  CardContainer,
  Content,
  CharacterContainer,
  EventsContainer,
  SeriesContainer,
} from "./styles";

import personagem from "../../assets/photo@2x.png";

const Card = () => {
  return (
    <CardContainer>
      <Content>
        <CharacterContainer>
          <img src={personagem} alt="personagem" />
          <p>Abner Jenkins</p>
        </CharacterContainer>
        <SeriesContainer>
          <p>Iron Man: Armor Wars</p>
          <p>Old Man Hawkeye</p>
          <p>Fantastic Four Visionaries: Walter Simonson Vol. 1</p>
        </SeriesContainer>
        <EventsContainer>
          <p>AvX</p>
          <p>Demon in the Bottle</p>
          <p>Dynasty M</p>
        </EventsContainer>
      </Content>
    </CardContainer>
  );
};

export default Card;
