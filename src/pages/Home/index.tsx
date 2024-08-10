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
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loading";
import { ICharacter } from "../../interfaces/character";
import { useCharacters } from "../../context/Character";

function Home() {
  const {
    characters,
    totalPages,
    currentPage,
    searchName,
    loading,
    setSearchName,
    handlePageChange,
    handleSearchNameChange,
  } = useCharacters();

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Title>Busca de personagens</Title>
          <Input
            searchName={searchName}
            handleSearchNameChange={handleSearchNameChange}
            setSearchName={setSearchName}
          />
          <TitleContainer>
            <TitleText hide={"block"}>Personagem</TitleText>
            <TitleText hide={"none"}>Séries</TitleText>
            <TitleText hide={"none"}>Eventos</TitleText>
          </TitleContainer>
          <CardContainer>
            {loading ? (
              <Loader />
            ) : (
              characters.map((character: ICharacter) => (
                <Card key={character.id} character={character} />
              ))
            )}
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
