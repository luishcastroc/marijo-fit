import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg.jpg';

const MainStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Main() {
  return (
    <>
      <MainStyle />
    </>
  );
}
