import styled from 'styled-components';

export const ButtonStyles = styled.button`
  font-family: 'Shadows Into Light', cursive;
  border-radius: 25px;
  height: 50px;
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--pastel-green);
  border: none;
  color: var(--white);
  font-size: 1.2rem;
  width: 9.5rem;

  @media (max-width: 23rem) {
    width: 7rem;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #aaa;
    color: grey !important;
    border: 1px solid grey;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--cape-cod);
    transition: 0.6s;
  }

  &.secondary {
    background-color: transparent;
    border: 2px solid var(--white);

    &:hover {
      background-color: white;
      color: var(--cape-cod);
      transition: 0.6s;
    }
  }

  &.square {
    background-color: transparent;
    color: var(--pastel-green);
    border: 1px solid var(--pastel-green);
    border-radius: 0px;

    &:hover {
      background-color: var(--pastel-green);
      color: var(--white);
      transition: 0.6s;
    }
  }
`;
