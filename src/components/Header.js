import PropTypes from 'prop-types';
import React from 'react';
import { styled } from 'twin.macro';
import { ReactComponent as LeafSVG } from 'leaf-logo.svg';

export const Container = styled.div`
  height: 4.0625rem;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  -ms-flex-align: center;
  align-items: center;
  transition: background-color 0.2s ease, height 0.4s ease;
  z-index: 26;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  pointer-events: none;
  animation: repaint 5ms;
  @media screen and (min-width: 768px) {
    height: 6.25rem;
    padding: 0 40px;
  }
  &.scrolled {
    background-color: #000;
    // animation: none;
  }
`;

export const Burger = styled.a`
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 50px;
  height: 41px;
  color: currentColor;
  padding: 10px;
  > span {
    display: block;
    transition: opacity 0.2s ease, transform 0.3s ease;
    opacity: 1;
    background-color: currentColor;
    height: 2px;
  }
`;

export const Logo = styled.div`
  width: 2.5rem;
`;

const Header = ({ scrolled }) => {
  return (
    <Container className={scrolled ? 'scrolled' : ''}>
      <div className="ml-0 text-white flex flex-grow justify-between">
        <Burger aria-label="Main menu">
          <span></span>
          <span></span>
          <span></span>
        </Burger>
        <Logo>
          <LeafSVG viewBox="0 0 500 500" />
        </Logo>
      </div>
    </Container>
  );
};

Header.propTypes = {
  scrolled: PropTypes.bool,
};

Header.defaultProps = {
  scrolled: false,
};

export default Header;
