import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  let location = useLocation();

  const { pathname } = location;

  console.log(pathname);
  return (
    <Wrapper background={pathname === '/contact' ? true : false}>
      <Content>
        <Copy>&copy; 2020 Marek Walica</Copy>
        <Media>
          <SocialLink href="https://www.facebook.com/mwalica" target="_blank" rel="noopener noreferref"><FontAwesomeIcon icon={faFacebook} className="media-icon" /></SocialLink>
          <SocialLink href="https://www.instagram.com/mawa_pl/" target="_blank" rel="noopener noreferref"><FontAwesomeIcon icon={faInstagram} className="media-icon" /></SocialLink>
          <SocialLink href="https://twitter.com/Marek24569753" target="_blank" rel="noopener noreferref"><FontAwesomeIcon icon={faTwitter} className="media-icon" /></SocialLink>
        </Media>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 1em;
  background-color: ${(props) =>
    props.background ? '#fff' : ({ theme }) => theme.lightGray};
  position: ${(props) => props.background && 'fixed'};
  bottom: ${(props) => props.background && '0'};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 1em;
  border-top: 1px solid ${({ theme }) => theme.lightGray2};
`;

const Copy = styled.div`
  font-size: 1rem;
  flex: 1;
`;

const Media = styled.div`
  color: ${({ theme }) => theme.lightGray2};

  .media-icon {
    color: ${({ theme }) => theme.lightGray3};
    padding: 6px;
    font-size: 2.4rem;
    transition: 0.2s all ease-in;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.gray};
    }
  }
`;

const SocialLink = styled.a`

`;

export default Footer;
