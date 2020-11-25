import { css } from 'linaria';

import { color, font, screenSize } from '../_variables.styles';
import { withOpacity } from '../util';

export const root = css`
  background-color: ${color.white};
  border-bottom: 1rem solid ${color.gold};
  box-shadow: 0 2px 4px 0 ${withOpacity(color.darkerGreen, 50)},
    0 2px 16px 0 ${withOpacity(color.darkerGreen, 12)};

  display: none;
  justify-content: space-between;

  padding-right: 1rem;

  @media all ${screenSize.mobile} {
    display: flex;
  }
`;

export const button = css`
  background: unset;
  border: unset;
  padding: 0 1rem;

  svg {
    fill: ${color.darkGreen};
  }
`;

export const nav = css`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`;

export const navWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  border-right: 1rem solid ${color.gold};
  background-color: ${color.white};

  display: grid;
  grid-template-columns: auto auto;
`;

export const exitButton = css`
  place-self: flex-start flex-end;
  height: calc(1.5rem + 0.75rem + ${font.navItem.fontSize} + 4px);
  margin-right: 0.25rem;
`;

export const navItem = css`
  ${font.navItem}
  padding: 1.5rem 0 0.75rem;

  &,
  &:visited {
    color: ${color.darkGreen};
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const hiddenNav = css`
  display: none !important;
`;

export const image = css`
  display: block;
  padding: 0.5rem;
  height: calc(1.5rem + 0.75rem + ${font.navItem.fontSize} + 4px - 1rem);
`;
