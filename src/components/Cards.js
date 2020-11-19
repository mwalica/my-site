import React from 'react';
import styled from 'styled-components';

import { photostocks } from '../photostocks';
import Card from './Card';

const Cards = () => {
  return (
    <Wrapper>
      {photostocks.map((photostock) => (
        <Card key={photostock.id} photostock={photostock} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
  justify-items: center;
`;

export default Cards;
