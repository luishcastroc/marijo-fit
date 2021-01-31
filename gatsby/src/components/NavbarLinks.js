import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--pastel-green);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--pastel-green);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

export default function NavbarLinks({ onChange }) {
  function handleClick() {
    // Here, we invoke the callback with the new value
    onChange();
  }
  return (
    <>
      <NavItem to="/" onClick={handleClick}>
        Inicio
      </NavItem>
      <NavItem to="/blog" onClick={handleClick}>
        Blog
      </NavItem>
      <NavItem to="/quien-es-marijo" onClick={handleClick}>
        Quien es Marijo
      </NavItem>
      <NavItem to="/contacto" onClick={handleClick}>
        Contacto
      </NavItem>
    </>
  );
}
