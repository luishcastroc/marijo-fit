import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import PostCard from './PostCard';

const PostsListStyles = styled.section`
  height: 550px;
  width: 100%;
  padding: 3rem 3.5rem;
  background-color: var(--white);
  display: grid;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 2rem;
  align-content: center;
  justify-items: center;
`;

export default function PostsList({ posts }) {
  return (
    <>
      <ScrollAnimation
        animateIn="flipInY"
        offset={250}
        animatePreScroll={false}
      >
        <h2 className="section-header">Publicaciones</h2>
      </ScrollAnimation>
      <PostsListStyles>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </PostsListStyles>
    </>
  );
}
