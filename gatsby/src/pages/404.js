import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/marijo-bg.jpg';

const PageStyles = styled.main`
  padding: 8rem 10rem 5rem 10rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    background-color: var(--cape-cod-70);
    color: var(--white);
    padding: 2rem;
  }

  @media (max-width: 48rem) {
    padding: 8rem 1rem 5rem 1rem;
  }
`;

// markup
const NotFoundPage = () => (
  <PageStyles>
    <div className="container">
      <title>No Encontrada</title>
      <h1>Pagina no encontrada</h1>
      <p>
        Lo Siento{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        No pudimos encontrar la página que buscabas.
        <br />
        <strong>
          <Link to="/">ir a Inicio.</Link>
        </strong>
        .
      </p>
    </div>
  </PageStyles>
);

export default NotFoundPage;
