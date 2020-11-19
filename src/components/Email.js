import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

import Alerts from '../components/Alerts';

import AlertContext from '../context/alert/alertContext'

const Email = () => {

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [emailObj, setEmailObj] = useState({
    name: '',
    email: '',
    message: '',
  });


  const { name, email, message } = emailObj;

  const onChange = (e) => {
    setEmailObj({ ...emailObj, [e.target.id]: e.target.value });
  };

  const validateEmail = (str) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(str);
    return re.test(str);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(name.trim() === '' || message === '' || !validateEmail(email)) {
      setAlert('Wypełnij poprawnie pola formularza' , 'danger');
    } else {
      emailjs
      .sendForm('gmail', 'template_1', e.target, 'user_7r06XsX6inN1tfbwSAuU1')
      .then(
        (result) => {
          console.log(result.text);
          setAlert("Wiadomość została wysłana", 'success');
        },
        (error) => {
          console.log(error.text);
          setAlert("Wiadomość nie została poprawnie wysłana", 'danger');
        }
      );

    setEmailObj({
      name: '',
      email: '',
      message: '',
    });
    }
  };

  return (
    <Wrapper>
      <Title>Kontakt</Title>
      <Form autoComplete="off" onSubmit={sendEmail}>
        <FieldGroup>
          <Field>
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              onChange={onChange}
            />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              id="email"
              name="email"
              onChange={onChange}
            />
          </Field>
        </FieldGroup>

        <Field>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            rows="8"
            value={message}
            id="message"
            name="message"
            onChange={onChange}
          ></textarea>
        </Field>
        <Field>
          <input type="submit" value="Wyślij wiadomość" />
        </Field>
        <Alerts />
      </Form>
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 980px;
  max-width: 80%;
  margin: 4em auto;
`;

const Title = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.darkGray};
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0.6em;
  &:after {
    content: '';
    display: inline-block;
    width: 16px;
    margin-left: 2px;
    border-bottom: 10px solid ${({ theme }) => theme.secondary};
  }
`;

const Form = styled.form`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 600px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media(min-width: 640px) {
    flex-direction: row;
  }
`;

const Field = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  &:first-child {
    margin-right: 1em;
  }
  label {
    color: ${({ theme }) => theme.darkGray};
  }

  input,
  textarea {
    width: 100%;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 1rem;
    background-color: ${({ theme }) => theme.lightGray};
    border: 2px solid transparent;
    border-radius: 0.375rem;
    padding: 0.8em 1em;
    outline: none;
    transition: 0.4s all ease;
    &:focus {
      outline: none;
      background-color: transparent;
      border: 2px solid #cbe0fb;
    }
  }

  input[type='submit'] {
    max-width: 200px;
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    color: #fff;
    padding: 0.5em 1em;
    border-radius: 3px;
    box-shadow: 0px 20px 40px 0px rgba(68, 134, 254, 0.2);
    cursor: pointer;
    transition: 0.5s box-shadow ease-in;
    &:hover {
      box-shadow: none;
    }
  }
`;

export default Email;
