import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import comicImage from "../../assets/comic-background.jpg";

export const Container = styled.main`
  width: 100%;
  max-width: 78%;
  margin: 1.5rem auto;
  min-height: 88vh;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${comicImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(9px);
  z-index: -1;
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;

  @media (max-width: 997px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const BackIcon = styled(MdArrowBackIosNew)`
  font-size: 1.5rem;
  color: #555555;
  cursor: pointer;

  margin: auto 0;
`;

export const Title = styled.div`
  display: flex;
  align-itens: center;
  gap: 5px;

  h2 {
    font-family: "PT Sans Caption";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    color: #555555;

    @media (max-width: 997px) {
      font-size: 24px;
    }
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubTitle = styled.h3`
  font-family: "PT Sans Caption";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 15px;
  color: #555555;

  text-align: center;

  @media (max-width: 997px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 15px;
  margin-bottom: 15px;
  color: #555555;

  text-align: center;
`;

export const ImgCharacter = styled.img`
  width: 500px;
  height: 600px;
  border-radius: 4px;
  opacity: 1;
  box-shadow: 0px 0px 5px #00000033;

  @media (max-width: 997px) {
    width: 250px;
    height: 300px;

    margin: 0 auto;
  }
`;

export const Information = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DetailsSection = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 997px) {
    flex-direction: column;
  }
`;

export const ListRow = styled.div`
  ul {
    font-family: "PT Sans Caption";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 13px;
    margin: 1rem 0;
    color: #555555;
  }
  li {
    margin: 10px 0;
    list-style-type: none;
  }
`;

export const ListTitle = styled.h4`
  font-family: "PT Sans Caption";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 15px;
  margin-bottom: 15px;
  color: #555555;
`;
