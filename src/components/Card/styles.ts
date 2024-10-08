import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  opacity: 1;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Content = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px 12px 24px 20px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.9rem 0 0.9rem 0.9rem;
    margin: 0;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  gap: 1.5rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    opacity: 1;
  }

  p {
    display: flex;
    text-align: left;
    font: normal normal bold 16px/22px PT Sans;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;

    margin: auto 0;
  }
`;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    text-align: left;
    font: normal normal normal 14px/16px PT Sans;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    text-align: left;
    font: normal normal normal 14px/16px PT Sans;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MoreIndicator = styled.p`
  font-size: 14px;
  font-family: PT Sans;
  color: #555555;
  margin: 0;
  padding: 0;
`;
