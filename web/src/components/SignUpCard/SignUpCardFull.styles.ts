import { css } from 'linaria';

import { font, screenSize } from '../../_variables.styles';

export const content = css`
  margin: 1rem 1rem 0.75rem;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: max-content auto;
  grid-gap: 1.5rem;

  @media all ${screenSize.tiny} {
    grid-template-columns: auto;
  }
`;

export const meta = css`
  margin: 0;

  grid-area: 1 / 1 / 2 / 2;
  @media all ${screenSize.mobile} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const description = css`
  flex: 1;
  margin: 0 0 1rem;

  grid-rows: 2/3;
  @media all ${screenSize.mobile} {
    grid-area: 2 / 1 / 3 / 3;
  }

  ${font.bodySmall}

  > p:first-child {
    margin-top: 0;
  }

  > p:last-child {
    margin-bottom: 0;
  }
`;

export const form = css`
  grid-area: 1 / 2 / 3 / 3;

  @media all ${screenSize.mobile} {
    grid-area: 3 / 1 / 4 / 3;
  }
`;
