import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  ${(props) => (props.footer === 'true' ? '' : 'margin: auto 0')};
  ${(props) => (props.footer === 'true' ? '' : 'flex: 0 1 18rem')};
  width: 18rem;

  @media (max-width: 48rem) and (orientation: landscape) {
    flex: 0 1 11em;
    width: 16rem;
  }
`;
export default function Logo({ footer }) {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/" footer={footer}>
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  );
}
