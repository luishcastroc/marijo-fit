import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';
import BlockContent from '@sanity/block-content-to-react';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../components/SEO';

const WhoIsMarijoStyles = styled(BackgroundImage)`
  padding: 8rem 10rem 5rem 10rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    background-color: var(--cape-cod-70);
    padding: 0 4rem 5rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .bio-container {
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    gap: 1.5rem;
    color: var(--white);

    .gatsby-image-wrapper {
      width: 100%;
      height: auto;
    }

    @media (max-width: 64rem) and (min-width: 48.06rem) {
      --columns: 1;
      .gatsby-image-wrapper {
        width: 100%;
      }
      p {
        font-size: 1rem;
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
    padding: 8rem 1rem;

    .container {
      padding: 0 1rem 5rem;
    }

    h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 8rem 1rem;

    .container {
      padding: 0 1rem 5rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default function WhoIsMarijo({ data: { marijo, image } }) {
  return (
    <WhoIsMarijoStyles Tag="div" fluid={image.sharp.fluid}>
      <SEO title="Quién es Marijo" />
      <div className="container">
        <ScrollAnimation
          animateIn="flipInY"
          delay={300}
          offset={0}
          animatePreScroll
          animateOnce
        >
          <h1 className="section-header">Quién es Marijo</h1>
        </ScrollAnimation>
        <div className="bio-container">
          <ScrollAnimation
            animateIn="flipInX"
            delay={600}
            offset={0}
            animatePreScroll
            animateOnce
          >
            <Img fluid={marijo.image.asset.fluid} alt={`${marijo.name}`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="flipInX"
            delay={1000}
            offset={0}
            animatePreScroll
            animateOnce
          >
            <BlockContent blocks={marijo.bio} />
          </ScrollAnimation>
        </div>
      </div>
    </WhoIsMarijoStyles>
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
    image: file(relativePath: { eq: "marijo-bg.jpg" }) {
      sharp: childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
