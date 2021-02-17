import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import Card from './Card';

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

  @media (max-width: 48rem) {
    --columns: 1;
    padding: 1rem;
  }

  @media (max-width: 64rem) and (min-width: 48.06rem) {
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

export default function CardSection({ cards }) {
  const { personalBg, dietBg, relaxBg } = useStaticQuery(graphql`
    query {
      personalBg: file(relativePath: { eq: "cards/personal-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dietBg: file(relativePath: { eq: "cards/diet-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      relaxBg: file(relativePath: { eq: "cards/relax-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  cards[0] = { ...cards[0], bgImg: personalBg.sharp.fluid };
  cards[1] = { ...cards[1], bgImg: dietBg.sharp.fluid };
  cards[2] = { ...cards[2], bgImg: relaxBg.sharp.fluid };

  return (
    <>
      <ScrollAnimation
        animateIn="flipInY"
        offset={250}
        animatePreScroll={false}
        animateOnce
      >
        <h2 className="section-header">Servicios</h2>
      </ScrollAnimation>
      <CardSectionStyles>
        {cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </CardSectionStyles>
    </>
  );
}
