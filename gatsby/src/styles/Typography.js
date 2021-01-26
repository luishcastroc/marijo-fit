import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Raleway-Light.ttf';
import fontBold from '../assets/fonts/Raleway-Bold.ttf';
import fontMedium from '../assets/fonts/Raleway-Medium.ttf';
import fontShadow from '../assets/fonts/ShadowsIntoLight-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${font});
  }

  @font-face {
    font-family: 'Raleway-Bold';
    src: url(${fontBold});
  }

  @font-face {
    font-family: 'Raleway-Medium';
    src: url(${fontMedium});
  }

  @font-face {
    font-family: 'Shadows Into Light', cursive;
    src: url(${fontShadow});
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
