import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 78%;
  margin: 0 auto;
  margin-top: 2.5rem;
  min-height: calc(75vh + 1rem);
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
  height: 30vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 10px;
`;
