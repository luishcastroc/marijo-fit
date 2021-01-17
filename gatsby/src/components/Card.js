import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  height: 370px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default function Card({ card }) {
  console.log(card);
  return (
    <CardStyles>
      <h1>{card.title}</h1>
    </CardStyles>
  );
}
