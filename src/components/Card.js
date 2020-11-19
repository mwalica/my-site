import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Card = ({ photostock }) => {
  const { title, image, url, tags } = photostock;

  return (
    <Wrapper as="a" href={url} target="_blank" rel="noopener noreferref">
      <Image src={image} alt={title} />
      <Title >{title}</Title>
      <Tags>
        {tags.join(', ')}
      </Tags>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 3px 6px 0px rgba(2, 25, 55, 0.04);
  cursor: pointer;
  transition: 0.4s box-shadow ease-out;
  text-decoration: none;
  &:hover {
    box-shadow: 0 30px 50px 0 rgba(2, 25, 55, 0.08);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  padding: 0.6em;
  font-weight: 400;
`;

const Tags = styled.div`
font-weight: 300;
  padding: 0.6em;
  color: ${({theme}) => theme.gray};
  font-size: 0.85rem;
  text-transform: uppercase;
`;

const Tag = styled.span`
  display: inline-block;
  text-align: center;
  /* width: 90px; */
  margin: 2px 4px;
  padding: 2px 8px;
  /* background-color: ${({ theme }) => theme.primary}; */
  color: ${({theme}) => theme.secondary};
  font-size: 0.85rem;
  border-radius: 50px;
  font-weight: 400;
  text-transform: uppercase;
`;

export default Card;
