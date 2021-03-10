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
  loadingBar,
  children,
}) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  const videoRef = useCallback((node) => {
    const loaderProgress = (video) => {
      var duration = video.duration;
      if (duration > 0 && video.buffered.length > 0) {
        let bufferedTotal = 0;
        for (var i = 0; i < video.buffered.length; i++) {
          bufferedTotal += video.buffered.end(i) - video.buffered.start(i);
        }
        setProgress((bufferedTotal / duration) * 100);
      }
    };

    const handleEvent = (event) => {
      const isPlaying = event.target.readyState === 4;
      setShowLoader(!isPlaying);
      if (!isPlaying) {
        event.target.buffered.length && loaderProgress(event.target);
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
        playsinline
      ></Video>
      {loadingBar.show && (
        <LoadingBar
          color={loadingBar.color}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className={showLoader ? '' : 'hidden'}
        />
      )}
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
  loadingBar: PropTypes.shape({
    show: PropTypes.bool,
    barColour: PropTypes.string,
  }),
};

HeroVideo.defaultProps = {
  containerWidth: '100vw',
  containerHeight: '100vh',
  autoPlay: true,
  volume: 0,
  loop: true,
  loadingBar: { show: true, color: '#f11946' },
};

export default HeroVideo;
