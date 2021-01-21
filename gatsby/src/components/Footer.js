import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: var(--cape-cod);
  display: grid;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <h1>Footer</h1>
    </FooterStyles>
  );
}