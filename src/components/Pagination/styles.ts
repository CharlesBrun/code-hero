import styled from "styled-components";
import { IPageNumber } from "./types";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const PageNumber = styled.button<IPageNumber>`
  margin: 0 6px;
  padding: 8px 18px;
  border: ${(props) =>
    props.className === "active" ? "1px solid #167abc;" : "1px solid #E5E5E5;"};
  background-color: ${(props) =>
    props.className === "active" ? "#167ABC" : "#F5F5F5"};
  color: ${(props) => (props.className === "active" ? "#FFFFFF" : "#555555")};
  border-radius: 4px;
  cursor: pointer;

  font: normal normal normal 14px/19px PT Sans;
  letter-spacing: 0px;
  opacity: 1;

  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color: #167abc90;
    color: #ffffff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin: 0 4px;
    padding: 5px 10px;
  }
`;

export const NavButton = styled.button`
  margin: 0 4px;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #8e8e8e;
  cursor: pointer;
  font-size: 1.5rem;

  transition: transform 0.2s ease-in-out;

  &:hover {
    color: #167abc90;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin: 0 4px;
    padding: 4px 4px;
  }
`;
