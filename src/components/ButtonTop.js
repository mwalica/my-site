import React, {useState} from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp as Arrow } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const ButtonTop = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 50) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 50) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    let style = {
        opacity: showScroll ? 1 : 0,
        transition: "0.3s ease-in"
    }
  return (
    <Wrapper
      onClick={() => scroll.scrollToTop()}
      style={style}
    >
      <FontAwesomeIcon icon={Arrow} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  bottom: 18px;
  right: 14px;
  color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.4s all ease-out;
  @media(min-width: 1024px) {
    right: 40px;
  }
  @media(min-width: 768px) {
    right: 20px;
  }
  @media(min-width: 640px) {
    display: flex;
  }
  &:hover {
      background-color: ${({ theme }) => theme.red};
  }
`;

export default ButtonTop;
