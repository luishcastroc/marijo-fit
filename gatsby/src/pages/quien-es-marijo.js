import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';

const WhoIsMarijoStyles = styled.div`
  margin-top: 7rem;
  padding: 0 10rem 5rem 10rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
  }

  .bio-container {
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    gap: 1.5rem;

    .gatsby-image-wrapper {
      width: 35rem;
      height: auto;
    }

    @media (max-width: 64rem) and (min-width: 48.06rem) {
      --columns: 1;
      .gatsby-image-wrapper {
        width: 100%;
      }
      p {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 48rem) {
      --columns: 1;
      .gatsby-image-wrapper {
        width: 100%;
      }
    }
  }

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    padding: 1rem;
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 1rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export default function WhoIsMarijo({ data: { marijo } }) {
  return (
    <>
      <SEO title="Quién es Marijo" />
      <WhoIsMarijoStyles>
        <ScrollAnimation animateIn="flipInY" offset={0} animatePreScroll>
          <h1 className="section-header">Quién es Marijo</h1>
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
            delay={1000}
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
