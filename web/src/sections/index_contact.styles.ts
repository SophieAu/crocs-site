import { css } from 'linaria';

import { font, screenSize } from '../_variables.styles';

export const root = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;

  > *:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: 0;
  }

  > *:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }

  > *:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }

  > *:nth-child(4) {
    grid-area: 2 / 2 / 4 / 3;
  }

  @media all ${screenSize.mobile} {
    > *:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }

    > *:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }

    > *:nth-child(4) {
      grid-area: 3 / 1 / 4 / 3;
    }
  }

  @media all ${screenSize.tiny} {
    > *:nth-child(2) {
      grid-area: 2 / 1 / 3 / 3;
    }

    > *:nth-child(3) {
      grid-area: 3 / 1 / 4 / 3;
    }

    > *:nth-child(4) {
      grid-area: 4 / 1 / 5 / 3;
    }
  }
`;

export const infotext = css`
  margin: 0;

  ${font.bodyNormal}
`;

export const socialMediaCard = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const socialMediaLinkContainer = css`
  display: flex;
  flex-direction: row;
`;

export const socialMediaLink = css`
  margin-top: 0.625rem;

  &:not(:last-child) {
    padding-right: 1.5rem;
  }

  img {
    height: 2rem;
    display: block;
  }
`;
