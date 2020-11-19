import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BgImg from '../assets/bg_hero.jpg';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <Wrapper>
      <Gradient>
        <Navigation />
        <SiteHeader>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
          >
            Marek <span>Walica</span> Portfolio
          </Title>
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            Music / Photography / Web Creation
          </Subtitle>
        </SiteHeader>
      </Gradient>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f67adf;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Gradient = styled.div`
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const SiteHeader = styled.div`
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 640px) {
    font-size: 4.2rem;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
  }
`;
const Subtitle = styled(motion.p)`
  margin-top: 1.5em;
  padding: 0.4em 0.8em;
  font-weight: 300;
  background-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  border-radius: 3px;
  @media(min-width: 640px) {
    font-size: 1.2rem;
  }
`;

export default Hero;
