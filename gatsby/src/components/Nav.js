import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';

const Navigation = styled.nav`
  height: 90px;
  display: flex;
  background-color: var(--cape-cod-70);
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 48rem) {
    height: 90px;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 48rem) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 6vh;
    background-color: var(--cape-cod-70);
    transition: all 0.3s ease-in;
    top: 90px;
    left: ${(props) => (props.open ? '-100%' : '0')};
  }
`;

const Hamburger = styled.div`
  background-color: var(--white);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--white);
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

export default function Nav({ scrolled }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleLinkClick() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <Navigation className={scrolled ? 'pos-sticky' : 'pos-absolute'}>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks onChange={handleLinkClick} />
        </Navbox>
      )}
    </Navigation>
  );
}
