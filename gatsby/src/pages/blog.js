import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import { BlogGrid } from '../styles/Grids';
import PostCard from '../components/PostCard';

const BlogStyles = styled.div`
  padding: 8rem 6rem 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? 'margin-bottom: 7rem;' : '')}

  .gatsby-image-wrapper {
    height: 250px;
  }
`;

export default function Blog({ data, pageContext }) {
  const posts = data.posts.nodes;
  return (
    <BlogStyles margin={data.posts.totalCount <= process.env.GATSBY_PAGE_SIZE}>
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
  }
`;
