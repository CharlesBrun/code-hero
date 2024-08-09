import React, { useState } from "react";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  Title,
} from "./styles";
import { FaSearch } from "react-icons/fa";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleIconClick = () => {
    console.log("Valor do input:", inputValue);
  };

  return (
    <Container>
      <Title>Nome do personagem</Title>
      <InputContainer>
        <InputText
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <IconContainer>
          <FaSearch onClick={handleIconClick} />
        </IconContainer>
      </InputContainer>
    </Container>
  );
};

export default Input;
