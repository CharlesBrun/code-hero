import React, { useEffect, useRef, useState } from "react";
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
import { api } from "../../services/api";
import Loader from "../../components/Loading";
import { ICharacter } from "../../interfaces/character";
import { isAxiosError } from "axios";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const hasFetched = useRef(false);
  const [loading, setLoading] = useState(false);
  const resultsPerPage = 10;
  const controllerRef = useRef<AbortController | null>(null);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber === currentPage) {
      return;
    }

    setCurrentPage(pageNumber);
    handleListData(pageNumber);
  };

  const handleListData = async (page = 1) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      setLoading(true);
      const res = await api.get("/characters", {
        params: {
          limit: resultsPerPage,
          offset: (page - 1) * resultsPerPage,
          apikey: "06909ef0c4881444b17a26b4d6326902",
          hash: "69b9b206213e0de4ed860f527e285417",
          ts: "1",
        },
        signal: controller.signal,
      });

      const { results, total } = res.data.data;
      setTotalPages(Math.ceil(total / resultsPerPage));
      setCharacters(results);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error) && error.code !== "ERR_CANCELED") {
        console.error("Erro ao buscar personagens:", error);
      }
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      handleListData();
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Title>Busca de personagens</Title>
          <Input />
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
