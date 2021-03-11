import React, { useState, createRef, useLayoutEffect } from 'react';
import { styled } from 'twin.macro';

import Page from 'components/Page';
import Header from 'components/Header';
import HeroVideo from 'components/HeroVideo';
import { WideContent, WideTitle, WideImage } from 'components/WideContent';
import ResponsiveContent from 'components/ResponsiveContent';
import Footer from 'components/Footer';
import content from 'assets/json/content.json';

export const HeroText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: 10%;
  transition: padding 0.5s ease;
  @media (min-width: 768px) {
    padding: 10% 7rem 10%;
  }
`;

export const Overlay = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.75;
  background: linear-gradient(180deg, #000, transparent, #000);
  z-index: 1;
`;

const opacityFromScroll = (element) => {
  if (element) {
    const distanceFromDocumentTop = element.offsetTop + element.offsetHeight;
    const distanceFromViewport = element.getBoundingClientRect().bottom;
    const opacity = (distanceFromViewport / distanceFromDocumentTop).toFixed(1);
    return opacity > 0 && opacity <= 1 ? opacity : 1;
  }

  return 1;
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const mainTitleRef = createRef();

  useLayoutEffect(() => {
    const handler = () => {
      if (scrolled && window.scrollY === 0) {
        setScrolled(false);
      } else if (!scrolled && window.scrollY > 0) {
        setScrolled(true);
      }
      const opacity = opacityFromScroll(mainTitleRef.current);
      setTitleOpacity(opacity);
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [scrolled, mainTitleRef]);

  return (
    <Page title={content.page.title}>
      <Header scrolled={scrolled}></Header>
      <HeroVideo src={content.hero.video}>
        <Overlay />
        <HeroText>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center text-shadow-lg"
            style={{ zIndex: 1, opacity: `${titleOpacity}` }}
            ref={mainTitleRef}
          >
            {content.hero.title}
          </h1>
        </HeroText>
      </HeroVideo>
      <WideContent title={content.titles[0]} body={content.body} />
      <WideImage
        images={content.pictures[0].responsive}
        defaultImage={content.pictures[0].default}
      />
      <WideTitle title={content.titles[1]} />
      <ResponsiveContent
        title={content.titles[0]}
        body={content.body}
        image={content.images[0]}
      />
      <WideTitle title={content.titles[2]} />
      <ResponsiveContent
        title={content.titles[0]}
        body={content.body}
        position="right"
        image={content.images[1]}
      />
      <WideTitle title={content.titles[2]} />
      <WideImage
        images={content.pictures[1].responsive}
        defaultImage={content.pictures[1].default}
      />
      <WideTitle title={content.titles[3]} />
      <Footer />
    </Page>
  );
};

export default Home;
