import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 78%;
  margin: 2.5rem auto;
  min-height: calc(73vh + 0.2rem);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h2`
  font-family: "PT Sans Caption";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;

  color: #555555;
`;

export const Footer = styled.footer`
  height: 10vh;
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 2em;
`;

export const TitleText = styled.p`
  font: normal normal normal 12px/16px PT Sans;
  width: 100%;
  color: #8e8e8e;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
