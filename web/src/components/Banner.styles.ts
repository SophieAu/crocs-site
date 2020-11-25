import { css } from 'linaria';

import { color, font, screenSize, sizes } from '../_variables.styles';

export const root = css`
  box-sizing: border-box;
  width: 100vw;
  padding: 1.5rem max(1rem, calc((100vw - 1024px + 2rem) / 2));
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all ${screenSize.desktop} {
    margin-top: -${sizes.headerBottomMargin};
  }
  @media all ${screenSize.tablet} {
    margin-top: -${sizes.headerBottomMargin};
  }

  @media all ${screenSize.mobile} {
    margin-top: -1rem;
  }
`;

export const button = css`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${color.white};
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
    outline: none;
  }
`;

export const text = css`
  ${font.bodySmall};
  color: ${color.white};

  text-align: center;
  margin: 0;
`;

export const error = css`
  background-color: ${color.red};
`;

export const success = css`
  background-color: ${color.darkGreen};
`;
