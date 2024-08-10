import styled from "styled-components";
import { TitleTextProps } from "./types";

export const Container = styled.main`
  width: 100%;
  max-width: 78%;
  margin: 1.5rem auto;
  min-height: 75vh;
`;

export const Row = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-family: "PT Sans Caption";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  margin-bottom: 15px;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Footer = styled.footer`
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
  min-height: 10vh;
  margin-top: auto;

  position: sticky;
  bottom: 0;
`;

export const TitleContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1em;

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

export const TitleText = styled.p<TitleTextProps>`
  font: normal normal normal 12px/16px PT Sans;
  width: 100%;
  color: #8e8e8e;

  @media (max-width: 768px) {
    display: ${(props) => (props.hide === "none" ? "none" : "block")};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
