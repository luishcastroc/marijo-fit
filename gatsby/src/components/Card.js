import React from 'react';
import styled from 'styled-components';
import wbg from '../assets/images/cards/white-bg.jpg';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 370px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => (props.bgImg ? props.bgImg : wbg)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  &:hover {
    .info-container {
      bottom: -100%;
    }

    .overlay-container {
      bottom: 0;
    }
  }

  .info-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--cape-cod-70);
    transition: all 0.6s ease;

    .description {
      color: var(--white);
      flex: 1;
      text-align: center;

      h3 {
        color: var(--pastel-green);
        font-weight: bold;
      }

      .description-content {
        display: none;
      }
    }

    .img-container {
      flex-basis: 80px;
      height: 100%;
      min-height: 80px;
      background-color: var(--pastel-green);
      display: flex;
      justify-content: center;
    }
  }

  .overlay-container {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--cape-cod-70);
    transition: all 0.8s ease;

    .overlay-description {
      color: var(--white);
      flex: 1;
      text-align: center;

      h3 {
        color: var(--pastel-green);
        font-weight: bold;
      }

      .description-content {
        display: none;
      }
    }

    .img-overlay-container {
      flex-basis: 80px;
      height: 100%;
      min-height: 80px;
      background-color: var(--pastel-green);
      display: flex;
      justify-content: center;
    }
  }

  img {
    width: 3rem;
    height: auto;
  }
`;

export default function Card({ card }) {
  return (
    <CardStyles bgImg={card.bgImg}>
      <div className="info-container">
        <div className="img-container">
          <img src={card.img} alt={card.title} />
        </div>
        <div className="description">
          <h3>{card.title}</h3>
        </div>
      </div>
      <div className="overlay-container">
        <div className="img-overlay-container">
          <img src={card.img} alt="" />
        </div>
        <div className="overlay-description">
          <h3>{card.title}</h3>
          <p className="overlay-description-content">{card.description}</p>
        </div>
      </div>
    </CardStyles>
  );
}
