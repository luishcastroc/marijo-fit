import styled from 'styled-components';

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const BlogGrid = styled.div`
  height: 550px;
  display: grid;
  --columns: ${({ columns }) => columns || 2};
  grid-template-columns: repeat(var(--columns), minmax(auto, 500px));
  gap: 2rem;
  align-content: center;
  justify-content: center;

  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 0 4rem;
  }

  @media (max-width: 768px) {
    --columns: 1;
    height: 100%;
    padding: 0 1rem;
  }
`;

// Single Grid Item (for home page)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;

  img {
    height: auto;
    font-size: 0;
  }

  p {
    font-family: 'Raleway-Bold';
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
    font-weight: bold;
  }

  .mark {
    display: inline;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);

    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );

    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
