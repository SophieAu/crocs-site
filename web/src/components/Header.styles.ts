import { css } from 'linaria';

import { color, font, screenSize, sizes } from '../_variables.styles';
import { withOpacity } from '../util';

export const root = css`
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: ${sizes.headerBottomMargin};

  @media all ${screenSize.mobile} {
    display: none;
  }
`;

export const nav = css`
  --maxContentWidth: 64rem;
  padding: 0 calc((100vw - var(--maxContentWidth) + 10rem) / 2);

  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;

  background-color: ${color.white};
  border-bottom: 1rem solid ${color.gold};
  box-shadow: 0 2px 4px 0 ${withOpacity(color.darkerGreen, 50)},
    0 2px 16px 0 ${withOpacity(color.darkerGreen, 12)};

  @media all ${screenSize.desktop} {
    grid-gap: 4rem;
  }

  @media all ${screenSize.tablet} {
    grid-gap: 2rem;
  }
`;

export const navItem = css`
  ${font.navItem}
  text-align: center;
  padding: 1.5rem 0 0.75rem;

  a,
  a:visited {
    color: ${color.darkGreen};
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const dropdown = css`
  position: absolute;
  z-index: -1;

  background-color: ${color.white};
  padding: 1rem 5rem 0.75rem 1rem;

  > * {
    display: block;
    text-align: left;
  }

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// TODO: get the top margin (-100px)a bit more elegantly
export const dropdownParent = css`
  height: calc(100% + 1rem - 1.5rem - 0.75rem);

  > *:first-child {
    cursor: pointer;
  }

  .${dropdown} {
    margin-top: -100px;

    @media (prefers-reduced-motion: no-preference) {
      transition: margin-top 0.3s ease-out;
    }
  }

  &:focus-within .${dropdown}, &:hover .${dropdown}, &:active .${dropdown}, &:focus .${dropdown} {
    margin-top: 1.5rem;

    @media (prefers-reduced-motion: no-preference) {
      transition: margin-top 0.3s ease-in;
    }
  }
`;

export const image = css`
  height: 158%;
`;

export const logoLink = css`
  display: inline;
  height: calc(1.5rem + 0.75rem + ${font.navItem.fontSize} + 4px);

  &:hover {
    opacity: 0.7;
  }
`;
