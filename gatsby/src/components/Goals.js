import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Goal from './Goal';
import { GoalsGrid } from '../styles/Grids';

const GoalsStyles = styled.div`
  height: 500px;
  background-color: var(--cape-cod);
  padding: 4rem 6rem 3rem;

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    --columns: 2;
    height: 100%;
    padding: 3rem 4rem;
  }

  @media (max-width: 48rem) {
    --columns: 1;
    height: 100%;
    padding: 6rem 1rem;
  }
`;

const goals = [
  'Contacto',
  'Consulta',
  'Plan personalizado',
  'Chequeo de resultados',
];

export default function Goals() {
  return (
    <GoalsStyles>
      <ScrollAnimation
        animateIn="flipInY"
        offset={250}
        animatePreScroll={false}
      >
        <h2 className="section-header">Como funciona?</h2>
      </ScrollAnimation>
      <GoalsGrid>
        {goals.map((goal, i) => (
          <Goal goal={goal} key={`goal-${i}`} />
        ))}
      </GoalsGrid>
    </GoalsStyles>
  );
}
