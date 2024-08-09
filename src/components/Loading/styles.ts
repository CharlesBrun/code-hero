import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const Spinner = styled(FaSpinner)`
  font-size: 2rem;
  color: #e56919;
  animation: ${spin} 1s linear infinite;
`;
