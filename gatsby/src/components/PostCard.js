import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { format, parseISO } from 'date-fns';
import Img from 'gatsby-image';

const PostCardStyles = styled.div`
  background-color: var(--white);
  border-radius: 1px;
  box-shadow: 0 0 2px -1px rgba(0, 0, 0, 0.75);
  height: 480px;
  margin: 0 auto;
  max-width: 500px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 250px;
  }

  .card-body {
    flex: 1 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    h4 {
      font-family: 'Shadows Into Light', cursive;
      font-weight: bold;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    button {
      align-self: center;
    }
  }
`;

export default function PostCard({ post, pagination = true }) {
  return (
    <PostCardStyles>
      {pagination && <Img fluid={post.mainImage.asset.fluid} />}
      {!pagination && (
        <img
          src={`${post.mainImage.asset.url}?w=500&h=250&fit=crop`}
          alt={post.title}
          style={{
            background: `url(${post.mainImage.asset.metadata.lqip})`,
            backgroundSize: 'cover',
          }}
        />
      )}
      <div className="card-body">
        <h4>{post.title}</h4>
        <sub>{format(parseISO(post.publishedAt), 'dd/MM/yyyy')}</sub>
        <p>{post.subtitle}</p>
        <button
          type="button"
          onClick={() => {
            navigate(`/blog/${post.slug.current}`);
          }}
        >
          Leer más...
        </button>
      </div>
    </PostCardStyles>
  );
}
