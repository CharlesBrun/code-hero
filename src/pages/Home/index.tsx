import React, { useState } from "react";
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
import Pagination from "../../components/Pagination";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber === currentPage) {
      return;
    }
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
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
      <Footer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Footer>
    </>
  );
}

export default Home;
