import React from "react";
import { useCharacters } from "../../context/Character";
import Header from "../../components/Header";
import {
  Container,
  ContainerRow,
  ContainerDescription,
  ImgCharacter,
  Row,
  SubTitle,
  Title,
  Description,
  Information,
  ListTitle,
  ListRow,
  DetailsSection,
  Overlay,
  BackgroundImage,
  BackIcon,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Details: React.FC = () => {
  const { character } = useCharacters();
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/");
  }

  if (!character) {
    handleReturn();
  }
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <>
      <Header />
      <Container>
        <BackgroundImage />
        <Overlay>
          <Row>
            <Title>
              <BackIcon onClick={handleReturn} />
              <h2>Detalhes do personagem</h2>
            </Title>
            <ContainerRow>
              <ImgCharacter src={imageUrl} alt={character.name} />

              <Information>
                <ContainerDescription>
                  <SubTitle>{character.name}</SubTitle>
                  {character.description && (
                    <Description>{character.description}</Description>
                  )}
                </ContainerDescription>
              </Information>
            </ContainerRow>
            <DetailsSection>
              <ListRow>
                <ListTitle>Quadrinhos:</ListTitle>
                <ul>
                  {character.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                  ))}
                </ul>
              </ListRow>

              <ListRow>
                <ListTitle>Séries:</ListTitle>
                <ul>
                  {character.series.items.map((serie, index) => (
                    <li key={index}>{serie.name}</li>
                  ))}
                </ul>
              </ListRow>

              <ListRow>
                <ListTitle>Histórias:</ListTitle>
                <ul>
                  {character.stories.items.map((story, index) => (
                    <li key={index}>{story.name}</li>
                  ))}
                </ul>
              </ListRow>

              <ListRow>
                <ListTitle>Eventos:</ListTitle>
                <ul>
                  {character.events.items.map((event, index) => (
                    <li key={index}>{event.name}</li>
                  ))}
                </ul>
              </ListRow>
            </DetailsSection>
          </Row>
        </Overlay>
      </Container>
    </>
  );
};

export default Details;
