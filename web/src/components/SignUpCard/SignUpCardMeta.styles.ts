import { css } from 'linaria';

import { color, font } from '../../_variables.styles';

export const root = css`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-column-gap: 0.625rem;
  grid-row-gap: 0.375rem;

  > *:last-child {
    grid-column: span 2;
  }
`;

export const metaItem = css`
  display: flex;
  align-items: center;
  margin: 0;

  ${font.bodyXSmall}

  img {
    display: block;
    margin-right: 0.25rem;
  }
`;

export const location = css`
  color: ${color.darkerGreen};

  &:hover,
  &:focus {
    color: ${color.darkGreen};
  }
`;
