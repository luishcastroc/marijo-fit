import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 18em;
  width: 18rem;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 16em;
    width: 16rem;
  }
`;
export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  );
}
