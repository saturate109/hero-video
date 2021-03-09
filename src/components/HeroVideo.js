import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'twin.macro';
import LoadingBar from 'react-top-loading-bar';

const Container = styled.div`
  background-color: gray;
  position: relative;
  width: 100vw;
  height: calc(100vh * 0.5);
  padding: 54.6875% 0 0;
  max-width: 100%;
  color: #fff;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  object-fit: cover;
`;

const HeroVideo = ({
  src,
  containerWidth,
  containerHeight,
  loop,
  autoPlay,
  children,
}) => {
  const [progress, setProgress] = useState(0);

  function updateProgress(video) {
    var duration = video.duration;
    if (duration > 0) {
      for (var i = 0; i < video.buffered.length; i++) {
        if (
          video.buffered.start(video.buffered.length - 1 - i) <
          video.currentTime
        ) {
          setProgress(
            (video.buffered.end(video.buffered.length - 1 - i) / duration) * 100
          );
          break;
        }
      }
    }
  }

  const videoRef = useCallback((node) => {
    const handleEvent = (event) => {
      switch (event.type) {
        case 'progress':
          event.target.buffered.length && updateProgress(event.target);
          break;
        default:
          break;
      }
    };

    if (node !== null) {
      node.addEventListener('progress', handleEvent);
    }
  }, []);

  return (
    <Container width={containerWidth} height={containerHeight}>
      <Video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted
        ref={videoRef}
      ></Video>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {children}
    </Container>
  );
};

HeroVideo.propTypes = {
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  autoPlay: PropTypes.bool,
  volume: PropTypes.number,
  loop: PropTypes.bool,
};

HeroVideo.defaultProps = {
  containerWidth: '100vw',
  containerHeight: '100vh',
  autoPlay: true,
  volume: 0,
  loop: true,
};

export default React.memo(HeroVideo);
