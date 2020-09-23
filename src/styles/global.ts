import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #121212;
    color: #F5F5F5;
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
