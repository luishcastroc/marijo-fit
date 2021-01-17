import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Raleway-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${font});
  }

  html {
    font-family: 'Raleway', sans-serif;
    color: var(--cape-cod);
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
