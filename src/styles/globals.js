import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body, input, label{
        font-family: sans-serif;
    }

    body{
        background: #8B73AB;
    }
`;
