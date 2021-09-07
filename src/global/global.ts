import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #7159c1;
    color: #000;
    -webkit-font-smoothing: antialiased;

  }
  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
