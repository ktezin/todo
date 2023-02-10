import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #E5E4E2;
        font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
