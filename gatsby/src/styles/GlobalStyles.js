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
  }

  * {
    box-sizing: border-box;
  }

  html,body {margin: 0; padding: 0;}

  html, body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;

    :visited {
      color:var(--pastel-green);
    }
    
    &[aria-current='page'] {
      color: var(--pastel-green);
      ::after {
        width: 100%;
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
  

  button {
    max-width: 150px;
    font-family: 'Shadows Into Light', cursive;
    border-radius:25px;
    height: 50px;
    padding: .5rem;
    cursor: pointer;
    background-color: var(--pastel-green);
    border: none;
    color: var(--white);
    font-size: 1.2rem;
    line-height: 1.2rem;
    width: 150px;

    &:hover{
      background-color: var(--cape-cod);
      transition: 0.6s;
    }

    &.secondary{
      background-color: transparent;
      border: 1px solid var(--white);

      &:hover {
        background-color:white;
        color: var(--cape-cod);
        transition: 0.6s;
      }
    }

    &.square{
      background-color: transparent;
      color: var(--pastel-green);
      border: 1px solid var(--pastel-green);
      border-radius:0px;


      &:hover {
        background-color:var(--pastel-green);
        color: var(--white);
        transition: 0.6s;
      }
    }
  }
`;

export default GlobalStyles;
