import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'September', sans-serif;
  }

  a {
    scroll-behavior: smooth;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
