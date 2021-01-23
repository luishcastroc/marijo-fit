import React from 'react';
import styled from 'styled-components';
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

  .general-info {
    display: flex;
    flex-direction: column;
  }
`;

export default function Footer() {
  const footer = 'true';
  return (
    <FooterStyles>
      <div className="general-info">
        <Logo footer={footer} />
        <p>
          Tu transformación es mi pasión, dejame proveerte de las herramientas
          para transformarte en la mejor versión de ti mismo.
        </p>
      </div>
    </FooterStyles>
  );
}
