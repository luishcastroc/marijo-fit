import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/circle-bg.jpg';

const GoalStyles = styled.div`
  position: relative;
  height: 13rem;
  width: 13rem;
  background-image: url(${bg});
  border-radius: 50%;

  .inner-circle {
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-family: 'Shadows Into Light', cursive;
    color: var(--white);
    height: 100%;
    width: 100%;
    background-color: var(--cape-cod-70);
  }

    &:before {
      position: absolute;
      content: '';
      height: calc(100% + 12px);
      width: calc(100% + 12px);
      border: 5px dashed var(--pastel-green);
      top: -10px;
      left: -11px;
      border-radius: inherit;
      animation: spin 10s linear infinite;
    }
  }

  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export default function Goal({ goal }) {
  return (
    <GoalStyles>
      <div className="inner-circle">{goal}</div>
    </GoalStyles>
  );
}
