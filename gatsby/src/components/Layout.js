import React, { useState, useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import useLatestData from '../utils/useLatestData';

export default function Layout({ children, location }) {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(false);
  const data = useLatestData();

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
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_SECRET}
      language="es-419"
    >
      <GlobalStyles />
      <Typography />
      <Nav scrolled={scrolled} />
      {children}
      <Footer data={data} location={location} />
    </GoogleReCaptchaProvider>
  );
}
