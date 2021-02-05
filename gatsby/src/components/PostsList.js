import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import PostCard from './PostCard';
import LoadingGrid from './LoadingGrid';

const PostsListStyles = styled.section`
  height: 550px;
  width: 100%;
  padding: 1.5rem 6rem 3rem;
  background-color: var(--white);
  display: grid;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 500px));
  gap: 2rem;
  align-content: center;
  justify-content: center;

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    padding: 3rem 4rem;
  }

  @media (max-width: 48rem) {
    --columns: 1;
    height: 100%;
    padding: 1.5rem 1rem;
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
          posts.map((post) => (
            <PostCard post={post} key={post._id} pagination={false} />
          ))}
      </PostsListStyles>
    </>
  );
}
