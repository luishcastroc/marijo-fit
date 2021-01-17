import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Cards = [
  { title: 'Nutrición Personalizada' },
  { title: 'Planes de Alimentación' },
  { title: 'Tratamientos Corporales' },
];

const CardSectionStyles = styled.section`
  width: 100%;
  padding: 5rem;
  background-color: var(--white);
  display: grid;
  --columns: 3;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 2rem;
  align-content: center;
  justify-items: center;

  @media (max-width: 768px) {
    --columns: 1;
    padding: 1rem;
  }

  @media (max-width: 968px) and (min-width: 769px) {
    --columns: 2;
  }
`;

export default function CardSection() {
  return (
    <CardSectionStyles>
      {Cards.map((card) => (
        <Card card={card} />
      ))}
    </CardSectionStyles>
  );
}
