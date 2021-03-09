import React from 'react';
import { styled } from 'twin.macro';

const Content = styled.div`
  padding-top: 54px;
  padding-bottom: 44px;
  background: black;
`;

export const Footer = () => {
  return (
    <Content>
      <div className="ml-20 mr-20 pl-0.5 pr-0.5">
        <div className="text-white">
          <p className="text-base leading-8">
            <a href="https://www.pexels.com/video/plantation-of-lavender-flowers-1705117/">
              * Video by Varun Ish Nanda from Pexels
            </a>
          </p>
          <p className="text-base leading-8">
            * Photos by&nbsp;
            <a href="https://unsplash.com/@natejohnston?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Nate Johnston from Unsplash
            </a>
            &nbsp;and&nbsp;
            <a href="https://www.pexels.com/photo/close-up-photography-of-purple-dahlia-flowers-542517/">
              Billel Moula
            </a>
            ,&nbsp;
            <a href="https://www.pexels.com/photo/photo-of-car-on-expressway-3422964/">
              Abdulwahab Alawadhi
            </a>
            &nbsp; from Pexels
          </p>

          <p className="text-sm leading-1 mt-1">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus eget congue odio, eget placerat ex.
            Nullam at lectus erat. Fusce ac luctus enim. Nam laoreet eros ut
            gravida venenatis. Aliquam erat volutpat. Vestibulum maximus
            ultrices erat. Fusce porta ac turpis eu accumsan. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Footer;
