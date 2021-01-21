import React from 'react';
import Main from '../components/Main';
import CardSection from '../components/CardSection';
import SEO from '../components/SEO';
import Goals from '../components/Goals';
import News from '../components/News';

export default function Index() {
  return (
    <>
      <SEO title="Inicio" />
      <Main />
      <CardSection />
      <Goals />
      <News />
    </>
  );
}
