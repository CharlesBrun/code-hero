import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background: #E5E5E5 0% 0% no-repeat padding-box;
        height: calc(100vh - 3.5rem);
        margin: auto;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
`;
