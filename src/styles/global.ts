import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    color: white;
    height: 100vh;
    width: 100vw;
    font-family: 'Epilogue', sans-serif;
  }

  h1, strong {
    font-weight: 500;
  }

  p {
    font-weight: 400;
  }

`;

export default GlobalStyle;
