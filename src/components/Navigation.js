import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR, useLocation } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Background from '../assets/hero.svg';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Wrapper navbar={pathname !== '/' ? true : false}>
      <NavMenu>
        <NavItem>
          <NavLinkr to="/"><FontAwesomeIcon className="icon" icon={faHome} /><span>Home</span></NavLinkr>
        </NavItem>
        {pathname === '/' && (
          <>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={600}>
              <FontAwesomeIcon className="icon" icon={faAddressCard} /> <span>O mnie</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="photostock" smooth={true} duration={600}>
              <FontAwesomeIcon className="icon" icon={faImages} /><span>Photostock</span>
              </NavLinks>
            </NavItem>
          </>
        )}

        <NavItem>
          <NavLinkr to="/contact"><FontAwesomeIcon className="icon" icon={faEnvelope} /><span>Kontakt</span></NavLinkr>
        </NavItem>
      </NavMenu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background: ${(props) =>
    props.navbar ? ({ theme }) => theme.primary : 'transparent'};
  background-image: ${(props) =>
    props.navbar ? `url(${Background})` : 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  height: 10vh;
  color: rgba(255, 255, 255, 0.85);
  width: 100%;
`;

const NavMenu = styled.ul`
display: flex;
    justify-content: center;
    align-items: center;
  list-style: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  cursor: pointer;
`;
const NavItem = styled.li`
  padding: 1em 1em;
  .icon {
    font-size: 1.4rem;
    @media(min-width: 768px) {
      display: none;
    }
  }
  span {
    display: none;
    @media(min-width: 769px) {
      display: inline;
    }
  }
`;
const NavLinks = styled(LinkS)`
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const NavLinkr = styled(LinkR)`
  padding: 0.5em 1em;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Navigation;
