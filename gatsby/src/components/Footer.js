import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { navigate } from 'gatsby';
import {
  FaRegEnvelope,
  FaTwitter,
  FaFacebookF,
  FaPhoneAlt,
} from 'react-icons/fa';
import Logo from './Logo';

const FooterStyles = styled.footer`
  min-height: 350px;
  padding: 1rem 6rem;
  background-color: var(--cape-cod);
  color: var(--white);
  display: grid;
  --columns: ${(props) => (props.data ? 4 : 1)};
  --contact: 4;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 4rem;
  ${(props) => (!props.data ? 'justify-items: center;' : '')}
  ${(props) => (!props.data ? 'align-items: center;' : '')}

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

  h4 {
    align-self: center;
    font-family: 'Shadows Into Light', cursive;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    li {
      margin-left: 2rem;
    }

    .links-container {
      width: 400px;
      margin-top: 25px;
      display: grid;
      grid-template-columns: repeat(2, minmax(110px, 1fr));
      gap: 1.5rem;
    }
  }

  .contact {
    grid-column-start: var(--contact);
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }

  .contact-item {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 0.5rem;

    a:hover {
      color: var(--pastel-green);
    }
  }

  .contact-icon {
    justify-self: center;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    --columns: 2;
    --contact: 0;
    padding: 1rem 4rem;
  }

  @media (max-width: 768px) {
    --columns: 1;
    --contact: 0;
    padding: 1rem;
  }
`;

export default function Footer({ data, location }) {
  const footer = 'true';
  return (
    <FooterStyles data={data}>
      {!data && (
        <div className="loading-circle">
          <div className="inner-circle">Cargando...</div>
        </div>
      )}
      {data && (
        <>
          <div className="general-info">
            <Logo footer={footer} />
            <ScrollAnimation
              animateIn="flipInY"
              offset={250}
              animatePreScroll={location.pathname !== '/'}
            >
              <p>
                Tu transformación es mi pasión, dejame proveerte de las
                herramientas para transformarte en la mejor versión de ti mismo,
                contactame y podremos diseñar el programa perfecto que se acople
                a tus necesidades.
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
              {data.links &&
                data.links.map(({ link, _id, title }) => (
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
          <div className="contact">
            <h4>Contactame</h4>
            {data.phone && (
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
            )}
            {data.email && (
              <div className="contact-item">
                <FaRegEnvelope className="contact-icon" />
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            )}
          </div>
        </>
      )}
    </FooterStyles>
  );
}
