import React from 'react';
import Main from '../components/Main';
import CardSection from '../components/CardSection';
import SEO from '../components/SEO';
import Goals from '../components/Goals';
import PostsList from '../components/PostsList';
import useLatestPosts from '../utils/useLatestPosts';

export default function Index() {
  const { posts } = useLatestPosts();
  return (
    <>
      <SEO title="Inicio" />
      <Main />
      <CardSection />
      <Goals />
      <PostsList posts={posts} />
    </>
  );
}
