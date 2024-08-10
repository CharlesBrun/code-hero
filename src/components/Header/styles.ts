import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 440px) {
    gap: 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: row;
  align-itens: center;
  gap: 0.3rem;
  margin-right: auto;

  @media (max-width: 440px) {
    flex-direction: column;
    text-align: right;
  }
`;

export const UserName = styled.p`
  font-family: PT Sans Caption;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #555555;
  text-decoration: none;
`;

export const UserObjective = styled.p`
  font-family: PT Sans Caption;
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #555555;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const UserPicture = styled.div`
  top: 16px;
  left: 1310px;
  width: 32px;
  height: 32px;

  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: PT Sans Caption;
    font-style: normal;
    font-size: 15px;
    font-weight: 700;
    color: #555555;
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 30vw;
  max-width: 120px;
  min-width: 60px;

  height: auto;
`;
