import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { navigate } from 'gatsby';
import Logo from './Logo';

const FooterStyles = styled.footer`
  min-height: 350px;
  padding: 1rem 5vw;
  background-color: var(--cape-cod);
  color: var(--white);
  display: grid;
  --columns: 4;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 4rem;

  a {
    :visited,
    :active {
      color: var(--pastel-green);
    }
  }

  .general-info {
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    li {
      margin-left: 2rem;
    }

    h4 {
      align-self: center;
      font-family: 'Shadows Into Light', cursive;
      font-weight: 400;
      font-size: 1.3rem;
    }

    .links-container {
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(2, minmax(110px, 1fr));
      justify-items: center;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    --columns: 2;
  }

  @media (max-width: 768px) {
    --columns: 1;
  }
`;

export default function Footer({ links }) {
  const footer = 'true';
  return (
    <FooterStyles>
      <div className="general-info">
        <Logo footer={footer} />
        <ScrollAnimation
          animateIn="flipInY"
          offset={250}
          animatePreScroll={false}
        >
          <p>
            Tu transformación es mi pasión, dejame proveerte de las herramientas
            para transformarte en la mejor versión de ti mismo, contactame y
            podremos diseñar el programa perfecto que se acople a tus
            necesidades.
          </p>
          <button
            className="square"
            type="button"
            onClick={() => {
              navigate('/contacto');
            }}
          >
            Contactame
          </button>
        </ScrollAnimation>
      </div>
      <div className="links">
        <h4>Enlaces de Interés</h4>
        <div className="links-container">
          {links &&
            links.map(({ link, _id, title }) => (
              <li key={_id}>
                <a
                  href={link}
                  title={title}
                  className="nutri-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
        </div>
      </div>
    </FooterStyles>
  );
}
