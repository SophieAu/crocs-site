import { css } from 'linaria';

import { font, screenSize } from '../_variables.styles';

export const root = css`
  --smallCardWidth: 26rem;

  display: grid;
  grid-template-rows: auto minmax(var(--smallCardWidth), auto);
  grid-gap: 2rem;

  @media all ${screenSize.desktop} {
    grid-template-columns: var(--smallCardWidth) auto;

    > *:nth-child(1) {
      grid-column: span 2;
    }
  }

  @media all ${screenSize.tablet} {
    grid-template-columns: repeat(2, 1fr);

    > *:nth-child(1) {
      grid-column: span 2;
    }
  }
`;

export const map = css`
  aspect-ratio: 1;
`;

export const text = css`
  ${font.bodyNormal}

  &:first-child {
    padding-top: 1rem;
  }
`;
