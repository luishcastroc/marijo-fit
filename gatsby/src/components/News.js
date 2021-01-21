import React from 'react';
import styled from 'styled-components';

const NewsStyles = styled.section`
  height: 550px;
  background-color: var(--white);
`;

export default function News() {
  return (
    <NewsStyles>
      <h1>Noticias y Articulos</h1>
    </NewsStyles>
  );
}
