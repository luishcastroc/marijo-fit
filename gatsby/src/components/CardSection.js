import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
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
  padding: 3rem 6rem;
  background-color: var(--white);
  display: grid;
  --columns: 3;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 2rem;
  align-content: center;
  justify-items: center;
  position: relative;

  @media (max-width: 768px) {
    --columns: 1;
    padding: 1rem;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    --columns: 2;
    padding: 3rem 4rem;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-top: solid 50px var(--white);
    border-left: solid 50px transparent;
    border-right: solid 50px transparent;
  }
`;

export default function CardSection() {
  return (
    <>
      <ScrollAnimation
        animateIn="flipInY"
        offset={250}
        animatePreScroll={false}
      >
        <h2 className="section-header">Servicios</h2>
      </ScrollAnimation>
      <CardSectionStyles>
        {Cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </CardSectionStyles>
    </>
  );
}
