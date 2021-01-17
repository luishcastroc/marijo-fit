import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --keppel: #44B2A5;
    --pastel-green: #86E876;
    --cape-cod: #323737;
    --cape-cod-70: #323737b3;
    --ghost: #C0C7D2;
    --white: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  html,body {margin: 0; padding: 0;}

  html, body, #root {
    height: 100%;
  }

  a {text-decoration: none;}

  .pos-absolute {
    position: absolute;
    top: 0;
  }

  .pos-sticky {
    position: sticky;
    top:0;
    transition: all .8sec ease-in;
  }
`;

export default GlobalStyles;
