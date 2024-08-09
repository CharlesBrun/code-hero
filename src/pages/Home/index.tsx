import React from "react";
import Header from "../../components/Header";
import {
  CardContainer,
  Container,
  Footer,
  Row,
  Title,
  TitleContainer,
  TitleText,
} from "./styles";
import Input from "../../components/Input";
import Card from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Title>Busca de personagens</Title>
          <Input />
          <TitleContainer>
            <TitleText>Personagem</TitleText>
            <TitleText>Séries</TitleText>
            <TitleText>Eventos</TitleText>
          </TitleContainer>
          <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
