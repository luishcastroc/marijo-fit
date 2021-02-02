import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const BlockContent = require('@sanity/block-content-to-react');

const PostStyles = styled.div`
  height: 100%;
  padding: 8rem 10rem 5rem 10rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Shadows Into Light', cursive;
    font-size: 3.5rem;
    color: var(--pastel-green);
    text-align: center;
    position: relative;
  }

  h4,
  sub {
    font-family: 'Raleway-Bold';
  }

  sub {
    position: absolute;
    top: 110%;
    right: 60%;
  }

  .header {
    position: relative;
  }

  .gatsby-image-wrapper {
    margin-top: 3rem;
    margin-bottom: 1rem;
    align-self: center;
    width: 50%;
  }

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    padding: 8rem 3rem 5rem 3rem;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 8rem 3rem 5rem 3rem;

    h1 {
      font-size: 2rem;
    }

    sub {
      top: 110%;
      right: 50%;
    }

    .gatsby-image-wrapper {
      margin-top: 3rem;
      margin-bottom: 1rem;
      align-self: center;
      width: 100%;
    }
  }
`;

export default function Post({ data }) {
  const { post } = data;
  return (
    <>
      <SEO title={post.title} />
      <PostStyles>
        <div className="header">
          <h1>{post.title}</h1>
          <strong>
            <sub>Autor: {post.author.name}</sub>
          </strong>
        </div>
        <Img fluid={post.mainImage.asset.fluid} alt={`${post.title} Image`} />
        <BlockContent blocks={post.body} />
      </PostStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      author {
        name
      }
      mainImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      body: _rawBody
    }
  }
`;
