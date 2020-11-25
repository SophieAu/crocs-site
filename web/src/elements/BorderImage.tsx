import Img, { FluidObject } from 'gatsby-image';
import { css, cx } from 'linaria';
import React from 'react';

import { color, helper } from '../_variables.styles';
import img from '../../data/img/Berlin-Crocs-AFL.jpg';

const rootStyle = css`
  position: relative;
  height: 13rem;

  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%);
`;

const bottomBorderStyle = css`
  ${helper.absoluteCover}

  background-color: ${color.gold};
  clip-path: polygon(0% 80%, 0% 70%, 50% 90%, 100% 70%, 100% 80%, 50% 100%);
`;

const imageStyle = css`
  ${helper.absoluteCover}
  object-fit: cover;

  min-width: 100%;
  height: 100%;
`;

const overlayStyle = css`
  ${helper.absoluteCover}
`;

interface Props {
  src?: FluidObject;
  className?: string;
  alt?: string;
}

const BorderImage: React.FC<Props> = ({ src, className, children, alt = '' }) => (
  <div className={cx(rootStyle, className)}>
    {src ? (
      <Img alt={alt} className={imageStyle} fluid={src} />
    ) : (
      <img alt={alt} className={imageStyle} src={img} />
    )}
    <div className={bottomBorderStyle} />
    <div className={overlayStyle}>{children}</div>
  </div>
);

export default BorderImage;
