import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FooterStyles = styled.footer`
  min-height: 250px;
  padding: 1rem 5vw;
  background-color: var(--cape-cod);
  display: grid;
  --columns: 4;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 4rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="general-info">
        <Logo />
      </div>
    </FooterStyles>
  );
}
