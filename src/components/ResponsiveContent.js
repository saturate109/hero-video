import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'twin.macro';
import { InView } from 'react-intersection-observer';

const Container = styled.div`
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding-top: 54px;
  padding-bottom: 44px;
  width: 100%;
  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 27rem;
    padding: 2rem;
    transition-duration: 1s;
    background: white;
    ${(props) => `${props.position}: 5%`};
    color: black;
    &.showContent {
      opacity: 1;
      top: 10%;
    }
    &.hideContent {
      opacity: 0;
      top: 50%;
    }
  }
`;

const Background = styled.div`
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  height: 45vh;
  background-image: url(${(props) => props.image});
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;

export const ResponsiveContent = ({ title, body, position, image }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Container>
      <InView threshold={0.5} onChange={(inView) => setShowContent(inView)}>
        <Background image={image.src} alt={image.alt} />
        <Content
          position={position}
          className={`${showContent ? 'showContent' : 'hideContent'}`}
        >
          <div className="mx-10 sm:mx-20 lg:mx-0 opacity-1 pl-0.5 pr-0.5 text-center">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <div className="text-base leading-8">{body}</div>
          </div>
        </Content>
      </InView>
    </Container>
  );
};

ResponsiveContent.propTypes = {
  body: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

ResponsiveContent.defaultProps = {
  body: '',
  position: 'left',
  title: '',
};

export default ResponsiveContent;
