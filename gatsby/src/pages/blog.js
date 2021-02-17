import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import { BlogGrid } from '../styles/Grids';
import PostCard from '../components/PostCard';

const BlogStyles = styled(BackgroundImage)`
  padding: 8rem 6rem 5rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .gatsby-image-wrapper {
    height: 250px;
  }

  @media (max-width: 64rem) {
    padding: 8rem 3rem 1rem;
    height: 100%;
    min-height: 100vh;
  }

  @media (max-width: 48rem) {
    padding: 7rem 1rem 1rem;
    height: 100%;
    min-height: 100vh;
  }
`;

export default function Blog({ data, pageContext }) {
  const posts = data.posts.nodes;
  const bg = data.image;
  return (
    <BlogStyles Tag="div" fluid={bg.sharp.fluid}>
      <SEO title={`Blog - Página ${pageContext.currentPage || 1}`} />
      <BlogGrid columns={process.env.GATSBY_PAGE_SIZE}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </BlogGrid>
      {data.posts.totalCount > process.env.GATSBY_PAGE_SIZE && (
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.posts.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/blog"
        />
      )}
    </BlogStyles>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    posts: allSanityPost(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        title
        subtitle
        id
        slug {
          current
        }
        mainImage {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
        publishedAt
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
