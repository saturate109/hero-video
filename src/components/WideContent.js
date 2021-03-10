import PropTypes from 'prop-types';
import React from 'react';
import { styled } from 'twin.macro';

const Content = styled.div`
  padding-top: 54px;
  padding-bottom: 44px;
`;

export const WideContent = ({ title, body }) => {
  return (
    <Content>
      <div className="mx-10 sm:mx-20 px-0.5 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="text-base leading-8">{body}</div>
      </div>
    </Content>
  );
};

export const WideTitle = ({ title }) => {
  return (
    <Content>
      <div className="mx-20 px-0.5 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
      </div>
    </Content>
  );
};

export const WideImage = ({ images, defaultImage }) => {
  return (
    <React.Fragment>
      <picture>
        {images.map((image, index) => (
          <source media={image.media} srcSet={image.srcSet} key={index} />
        ))}
        {defaultImage && (
          <img
            src={defaultImage.image}
            alt={defaultImage.alt}
            className="w-full"
            loading="lazy"
          />
        )}
      </picture>
    </React.Fragment>
  );
};

WideImage.propTypes = {
  defaultImage: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcSet: PropTypes.string,
    })
  ),
};

WideImage.defaultProps = {
  images: [],
};
