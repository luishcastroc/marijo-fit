import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import PostCard from './PostCard';
import LoadingGrid from './LoadingGrid';

const PostsListStyles = styled.section`
  height: 550px;
  width: 100%;
  padding: 1.5 3.5rem 3rem 3.5rem;
  background-color: var(--white);
  display: grid;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 500px));
  gap: 2rem;
  align-content: center;
  justify-content: center;

  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    --columns: 1;
  }
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
        {!posts && <LoadingGrid count={2} />}
        {posts && !posts?.length && <p>No hay publicaciones</p>}
        {posts?.length &&
          posts.map((post) => <PostCard post={post} key={post._id} />)}
      </PostsListStyles>
    </>
  );
}
