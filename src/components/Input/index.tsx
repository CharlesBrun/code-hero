import React from "react";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  Title,
} from "./styles";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  searchName: string;
  onSearchNameChange: () => void;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  searchName,
  onSearchNameChange,
  setSearchName,
}) => {
  return (
    <Container>
      <Title>Nome do personagem</Title>
      <InputContainer>
        <InputText
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <IconContainer>
          <FaSearch onClick={onSearchNameChange} />
        </IconContainer>
      </InputContainer>
    </Container>
  );
};

export default Input;
