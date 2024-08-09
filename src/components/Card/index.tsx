import React from "react";
import { CardContainer, Content, TitleContainer, TitleText } from "./styles";

const Card = () => {
  return (
    <>
      <TitleContainer>
        <TitleText>Personagem</TitleText>
        <TitleText>Séries</TitleText>
        <TitleText>Eventos</TitleText>
      </TitleContainer>
      <CardContainer>
        <Content></Content>
      </CardContainer>
    </>
  );
};

export default Card;
