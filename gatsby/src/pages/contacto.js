import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FiAlertTriangle } from 'react-icons/fi';
import bg from '../assets/images/marijo-bg.jpg';
import SEO from '../components/SEO';
import { ButtonStyles } from '../styles/Button';

const ContactStyles = styled.div`
  padding: 8rem 12rem 5rem;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .form-container {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    background-color: var(--cape-cod-70);
    width: 45rem;
    justify-content: center;
    align-items: center;

    h4 {
      margin-bottom: 2rem;
      text-align: center;
      color: var(--pastel-green);
      font-size: 1.8rem;
      font-family: 'Shadows Into Light', cursive;
    }

    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
      padding: 0 3rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      width: 100%;

      .text-input {
        height: 2rem;
        border: 0;
        border-radius: 20px;
        padding: 0 1rem;
      }

      .text-input-area {
        border: 0;
        border-radius: 20px;
        padding: 1rem;
        height: 5rem;
        resize: none;
      }

      .text-input,
      .text-input-area {
        &[aria-invalid='true'] {
          border: 2px solid red;
        }

        &:focus {
          outline: none;
        }
      }

      span {
        color: var(--white);
        margin-bottom: 0.5rem;
      }

      .error-msg {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 0.1fr 1.5fr;
      }
    }

    button {
      margin-top: 0.5rem;
    }

    .buttons-container {
      margin-top: 1rem;
      display: grid;
      gap: 1.5rem;
      --columns: 2;
      grid-template-columns: repeat(var(--columns), 1fr);
      align-content: center;
      justify-items: center;
      width: 100%;
    }
  }

  @media (max-width: 64rem) {
    padding: 8rem 3rem 3rem;
    max-height: 100%;
    min-height: 100vh;

    .form-container {
      width: 80%;
      padding: 4rem;

      .contact-form {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }

    .buttons-container {
      --columns: 1;
      width: 100%;
    }
  }

  @media (max-width: 48rem) {
    padding: 7rem 1rem 3rem;
    max-height: 100%;
    min-height: 100vh;

    .form-container {
      width: 100%;
      padding: 1rem;

      .contact-form {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }

    .buttons-container {
      --columns: 1;
      width: 100%;
    }
  }

  @media (max-width: 48rem) {
    button {
      width: 100%;
    }
  }
`;

export default function Contact() {
  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
  });
  const { isValid, isSubmitted } = formState;
  const onSubmit = (data) => console.log('data:', data);

  return (
    <>
      <SEO title="Contacto" />
      <ContactStyles>
        <div className="form-container">
          <ScrollAnimation animateIn="flipInY" offset={0} animatePreScroll>
            <h4>Contactame y comencemos con tu vida saludable...</h4>
          </ScrollAnimation>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <label htmlFor="name" className="field">
              <span>Nombre*</span>
              <input
                className="text-input"
                type="text"
                name="name"
                id="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                ref={register({ required: true })}
              />
              {errors.name && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Este campo es requerido.
                </span>
              )}
            </label>
            <label htmlFor="email" className="field">
              <span>Correo electrónico*</span>
              <input
                className="text-input"
                type="text"
                name="email"
                id="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email?.type === 'pattern' && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Correo inválido.
                </span>
              )}
              {errors.email?.type === 'required' && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Este campo es requerido.
                </span>
              )}
            </label>
            <label htmlFor="phone" className="field">
              <span>Teléfono*</span>
              <input
                className="text-input"
                type="phone"
                name="phone"
                id="phone"
                aria-invalid={errors.phone ? 'true' : 'false'}
                ref={register({
                  required: true,
                  pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                })}
              />
              {errors.phone?.type === 'pattern' && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Teléfono inválido.
                </span>
              )}
              {errors.phone?.type === 'required' && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Este campo es requerido.
                </span>
              )}
            </label>
            <label htmlFor="comment" className="field">
              <span>Comentario*</span>
              <textarea
                className="text-input-area"
                name="comment"
                rows="4"
                cols="50"
                id="comment"
                aria-invalid={errors.comment ? 'true' : 'false'}
                ref={register({
                  required: true,
                })}
              />
              {errors.comment && (
                <span role="alert" className="error-msg">
                  <FiAlertTriangle />
                  Este campo es requerido.
                </span>
              )}
            </label>
            <div className="buttons-container">
              <ButtonStyles type="submit" disabled={!isValid || isSubmitted}>
                Enviar
              </ButtonStyles>
              <ButtonStyles type="button" className="secondary" onClick={reset}>
                Limpiar
              </ButtonStyles>
            </div>
          </form>
        </div>
      </ContactStyles>
    </>
  );
}
