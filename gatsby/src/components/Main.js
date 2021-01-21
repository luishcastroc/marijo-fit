import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg.jpg';

const MainStyle = styled.main`
  padding-top: 8rem;
  padding-bottom: 5rem;
  height: 100%;
  width: 100%;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const MainCard = styled.div`
  height: 80vh;
  width: 70vw;
  background-color: var(--cape-cod-70);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  padding: 0 8rem;

  h4 {
    width: 35rem;
    font-family: 'Shadows Into Light', cursive;
    font-weight: 400;
    font-size: 2rem;
    color: var(--pastel-green);
  }

  h2 {
    width: 35rem;
    font-size: 3.5rem;
    color: var(--white);
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 95%;
    padding: 0 6rem;

    h4 {
      width: 33rem;
      font-weight: 400;
      font-size: 2rem;
      left: 5%;
    }

    h2 {
      width: 31rem;
      left: 5%;
      top: 40%;
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 95%;
    padding: 10rem 1rem;

    h4 {
      font-size: 1.1rem;
      width: 18rem;
    }

    h2 {
      font-size: 2rem;
      top: 35%;
    }
  }
`;

export default function Main() {
  return (
    <MainStyle>
      <MainCard>
        <h4>Motivandote para tener un estilo de vida más saludable.</h4>
        <h2>Hola, Soy Marijo tu próxima Nutrióloga.</h2>
      </MainCard>
    </MainStyle>
  );
}
