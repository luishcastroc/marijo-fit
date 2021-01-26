import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import useLatestLinks from '../utils/useLatestLinks';

export default function Layout({ children }) {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(false);
  const { links } = useLatestLinks();

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90;
      if (isScrolled) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav scrolled={scrolled} />
      {children}
      <Footer links={links} />
    </>
  );
}
