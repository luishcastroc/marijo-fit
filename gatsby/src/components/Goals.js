import React from 'react';
import styled from 'styled-components';

const GoalsStyles = styled.div`
  height: 350px;
  background-color: var(--cape-cod);
`;

export default function Goals() {
  return (
    <GoalsStyles>
      <h1>Goals</h1>
    </GoalsStyles>
  );
}
