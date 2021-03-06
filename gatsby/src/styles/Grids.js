import styled from 'styled-components';

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const BlogGrid = styled.div`
  height: 550px;
  width: 100%;
  padding: 0;
  display: grid;
  --columns: ${({ columns }) => columns || 2};
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 2rem;
  align-content: center;
  justify-items: center;

  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const GoalsGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  --columns: 4;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 2rem;
  align-content: center;
  justify-items: center;

  @media (max-width: 64rem) and (min-width: 48.06rem) {
    --columns: 2;
  }

  @media (max-width: 48rem) {
    --columns: 1;
    gap: 3rem;
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
