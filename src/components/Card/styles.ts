import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #384651;
  position: relative;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border 3px solid #FFFFFF;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

export const HasInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff80;
  }

  p {
    font-family: "Open Sans";
    front-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.p`
  font: normal normal normal 12px/16px PT Sans;
  width: 50%;
  color: #8e8e8e;
`;
