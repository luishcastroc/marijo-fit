import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --keppel: #44B2A5;
    --pastel-green: #86E876;
    --cape-cod: #323737;
    --cape-cod-70: #323737b3;
    --ghost: #C0C7D2;
    --white: #ffffff;
    --grey: #efefef;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,body {
    margin: 0; 
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  input, textarea, select { 
    font-family:inherit; 
    font-size: 1rem;
  }

  strong {
    font-family: 'Raleway-Bold';
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .link-active {
    color: var(--pastel-green);
    ::after {
      width: 100%;
      }
  }

  .loading-circle {
    position: relative;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;

    .inner-circle {
      padding: 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-family: 'Shadows Into Light', cursive;
      color: var(--white);
      height: 100%;
      width: 100%;
      background-color: var(--cape-cod-70);
    }
      &:before {
        position: absolute;
        content: '';
        height: calc(100% + 12px);
        width: calc(100% + 12px);
        border: 5px dashed var(--pastel-green);
        top: -10px;
        left: -11px;
        border-radius: inherit;
        animation: spin 10s linear infinite;
      }

    @keyframes spin {
      100% {
        transform: rotateZ(360deg);
      }
    }
  }
  

  .pos-absolute {
    position: absolute;
    top: 0;
  }

  .pos-sticky {
    position: sticky;
    top:0;
    animation: .7s ${fadeIn} ease-in;
  }

  .layout {
    padding-top: 120px;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .section-header {
    font-family: 'Shadows Into Light', cursive;
    font-size: 3rem;
    color: var(--pastel-green);
    text-align: center;

    &::before,
    &::after {
      display: inline-block;
      content: "";
      border-top: .3rem solid var(--pastel-green);
      width: 4rem;
      margin: 0 1rem;
      transform: translateY(-1rem);
      }
  }

  @media (max-width: 48rem) {
    .section-header {
      font-size: 2rem;

      &::before,
      &::after {
        width: 1.8rem;
        transform: translateY(-0.4rem);
        }
    }
  }

  @media (max-width: 23rem) {
    .section-header {
      font-size: 1.5rem;

      &::before,
      &::after {
        width: 1.3rem;
        transform: translateY(-0.4rem);
        }
    }
  }
`;

export default GlobalStyles;
