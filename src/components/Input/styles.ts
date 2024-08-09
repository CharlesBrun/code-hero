import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 295px;
  height: 32px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;

  &:hover {
    cursor: pointer;
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 100%;
  padding-right: 35px;
  padding-left: 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  border-radius: 4px;
  font: italic normal normal 14px/19px PT Sans;
`;

export const Title = styled.h3`
  font: normal normal bold 16px/24px PT Sans Caption;
  letter-spacing: 0px;
  color: #555555;
`;
