import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';

const WhoIsMarijoStyles = styled.div`
  margin-top: 7rem;
  padding: 0 6rem 5rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Shadows Into Light', cursive;
    font-size: 4.5rem;
    color: var(--pastel-green);
    margin-bottom: 1rem;
  }

  .bio-container {
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    gap: 2rem;

    .gatsby-image-wrapper {
      width: 35rem;
      height: auto;
    }
  }
`;

export default function WhoIsMarijo({ data: { marijo } }) {
  return (
    <>
      <SEO title="Quién es Marijo" />
      <WhoIsMarijoStyles>
        <ScrollAnimation animateIn="flipInY" offset={0} animatePreScroll>
          <h1>Quién es Marijo</h1>
        </ScrollAnimation>
        <div className="bio-container">
          <ScrollAnimation
            animateIn="flipInX"
            delay={600}
            offset={0}
            animatePreScroll
          >
            <Img fluid={marijo.image.asset.fluid} alt={`${marijo.name}`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="flipInX"
            delay={600}
            offset={0}
            animatePreScroll
          >
            <BlockContent blocks={marijo.bio} />
          </ScrollAnimation>
        </div>
      </WhoIsMarijoStyles>
    </>
  );
}

export const query = graphql`
  query($name: String! = "Maria Jose Castro Cabrera") {
    marijo: sanityAuthor(name: { eq: $name }) {
      _id
      name
      bio: _rawBio
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
