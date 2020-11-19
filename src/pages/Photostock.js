import React from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';

const Photostock = () => {
  return (
    <Wrapper id="photostock">
      <MyContent>
        <Header>
          <h3>Photostock</h3>
          <p>
            Ansel Adams:
            <span>
              {' '}
              Sometimes I arrive just when God’s ready to have somone click the
              shutter
            </span>
          </p>
        </Header>
        <Cards />
      </MyContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em 0;
  position: relative;
  background-color: ${({ theme }) => theme.lightGray};
`;

const MyContent = styled.article`
  width: 1024px;
  max-width: 80%;
  margin: 4em auto;
`;

const Header = styled.div`
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default Photostock;
