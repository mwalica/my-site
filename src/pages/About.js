import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Camera2 from '../assets/camera2.svg';

import AboutMe from '../assets/omnie1.jpg';

const About = () => {
  return (
    <Wrapper id="about">
      <Camera
        src={Camera2}
        animate={{
          x: [0, -100, -200, 0],
          y: [0, 100, -100, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          y: {
            duration: 20,
            yoyo: Infinity,
          },
          x: {
            duration: 20,
            yoyo: Infinity,
          },
          rotate: {
            duration: 15,
            yoyo: Infinity,
          },
        }}
      />
      <MyContent>
        <Header>
          <h3>O mnie</h3>
          <p>
            Werset z najważniejszej dla mnie Księgi:{' '}
            <span>
              Powierz Bogu drogę swoją, Zaufaj mu, a On wszystko dobrze uczyni
            </span>
          </p>
        </Header>
        <Content>
          <Image>
            <img src={AboutMe} alt="Maro" />
          </Image>

          <Description>
            <h4>
              Życiowe pasje <span>muzyka i fotografia</span>
            </h4>
            <h6>75 rocznik ubiegłego wieku</h6>
            <p>
              Jestem flecistą i nauczycielem informatyki. Lubię jeździć na
              rowerze i wędrować z moimi córkami po lesie. Lubię fotografować
              przyrodę - szczególnie pszczoły, kwiaty, nadmorskie krajobrazy
              oraz wszelkiego rodzaju detale. Interesuję się technologiami
              związanymi z FrontEnd (JavaScript, React, VueJs)
            </p>

            <Button to="/contact">Wyślij wiadomość</Button>
          </Description>
        </Content>
      </MyContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em 0;
  position: relative;
`;

const Camera = styled(motion.img)`
  display: none;
  opacity: 0.9;
  width: 180px;
  position: absolute;
  right: 70px;
  top: 400px;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const MyContent = styled.article`
  width: 980px;
  max-width: 80%;
  margin: 4em auto;
`;

const Header = styled.div`
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  margin-bottom: 2em;
  h3 {
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
  }
  p {
    text-align: center;
    font-weight: 300;
    color: ${({ theme }) => theme.gray};
  }

  p > span {
    font-weight: 400;
    color: ${({ theme }) => theme.darkGray};
  }
`;

const Content = styled.div`
  display: grid;
  /* grid-template-columns: auto auto; */
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-column-gap: 5em;
  justify-items: center;
`;

const Image = styled.figure`
  padding: 10px;

  img {
    display: block;
    width: 100%;
    max-width: 350px;
    border: 12px solid white;
    box-shadow: 2px 4px 25px -3px rgba(0, 0, 0, 0.1),
      2px 0 20px -10px rgba(0, 0, 0, 0.05);
  }
`;

const Description = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: start;
  }
  h4 {
    font-size: 2rem;
    color: ${({ theme }) => theme.darkGray};
    margin-bottom: 0.6em;
    span {
      display: inline;
      @media(min-width: 1024px) {
        display: inline-block;
      }
    }
  }

  h6 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 1em;
  }
  p {
    line-height: 1.8;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-top: 2em;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 3px;
  box-shadow: 0px 20px 40px 0px rgba(68, 134, 254, 0.2);
  cursor: pointer;
  transition: 0.5s box-shadow ease-in;

  &:hover {
    box-shadow: none;
  }
`;

export default About;
