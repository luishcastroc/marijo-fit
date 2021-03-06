import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { ButtonStyles } from '../styles/Button';

const MainStyle = styled(BackgroundImage)`
  padding: 8rem 6rem 5rem;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    padding: 8rem 4rem 10rem;
  }

  @media (max-width: 48rem) {
    padding: 8rem 1rem 3rem;
  }
`;

const MainCard = styled.div`
  height: 80vh;
  width: 100%;
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

  .button-container {
    width: 60%;
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    gap: 0.5rem;
    margin-top: 20px;
  }

  @media (max-width: 64rem) and (min-width: 48.5rem) {
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

  @media (max-width: 48rem) {
    justify-content: flex-start;
    padding: 10rem 1rem;

    h4 {
      font-size: 1.1rem;
      width: 70%;
    }

    h2 {
      font-size: 2rem;
      top: 35%;
      width: 95%;
    }
  }

  @media (max-width: 23rem) {
    padding: 6rem 1rem;
  }
`;

export default function Main() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <MainStyle Tag="main" fluid={image.sharp.fluid}>
      <MainCard>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <h4>Motivandote para tener un estilo de vida más saludable.</h4>
          <h2>Hola, Soy Marijo tu próxima Nutrióloga.</h2>
          <div className="button-container">
            <ButtonStyles
              type="button"
              onClick={() => {
                navigate('/quien-es-marijo');
              }}
            >
              Conoce más
            </ButtonStyles>
            <ButtonStyles
              className="secondary"
              type="button"
              onClick={() => {
                navigate('/contacto');
              }}
            >
              Contacto
            </ButtonStyles>
          </div>
        </ScrollAnimation>
      </MainCard>
    </MainStyle>
  );
}
