import React from "react";
import Header from "../../components/Header";
import { Container, Footer, Row, Title } from "./styles";
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
          <Card />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
