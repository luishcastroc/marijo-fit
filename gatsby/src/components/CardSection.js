import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Images } from '../utils/Images';

const Cards = [
  {
    title: 'Nutrición Personalizada',
    img: Images.personal,
    bgImg: Images.personalBg,
    description:
      'La nutrición personalizada se enfoca en individualizar la dieta de cada persona para así, lograr que satisfaga sus necesidades específicas dependiendo de factores como: su salud, su estilo de vida, sus objetivos personales, etc… ',
  },
  {
    title: 'Planes de Alimentación',
    img: Images.diet,
    bgImg: Images.dietBg,
    description:
      'Te proporcionamos un plan para controlar la ingestión de alimentos a fin de suplir las reales necesidades del organismo basado en tus metas',
  },
  {
    title: 'Tratamientos Corporales',
    img: Images.relax,
    bgImg: Images.relaxBg,
    description:
      'Muchas veces a pesar de las dietas y ejercicio cuesta bajar esos “rollitos”, que tanto nos molestan. Este tratamiento está enfocado a eliminar grasas localizadas, para disminuir el contorno y centímetros de la zona a tratar.',
  },
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

  @media (max-width: 1024px) and (min-width: 769px) {
    --columns: 2;
  }
`;

export default function CardSection() {
  return (
    <CardSectionStyles>
      {Cards.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </CardSectionStyles>
  );
}
