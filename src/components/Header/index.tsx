import React from "react";
import logo from "../../assets/logo-objective.svg";
import {
  Container,
  UserName,
  Row,
  Wrapper,
  StyledLink,
  UserPicture,
  LogoImg,
  UserObjective,
  ContainerTexts,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink to={"/"}>
          <LogoImg src={logo} alt="logo empresa" />
        </StyledLink>

        <Row>
          {/* <ContainerTexts> */}
          <UserName>Charles Viegas</UserName>
          <UserObjective> Teste de Front-end </UserObjective>
          {/* </ContainerTexts> */}
          <UserPicture>
            <p>CB</p>
          </UserPicture>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
