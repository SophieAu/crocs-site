import { css } from 'linaria';

import { color, font, screenSize, sizes } from '../_variables.styles';
import { withOpacity } from '../util';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const eventCards = css`
  width: 100%;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: space-around;

  > * {
    flex: 1;
  }

  > * {
    margin-right: 1rem;
  }
  > *:not(:first-child) {
    margin-left: 1rem;
  }

  @media all ${screenSize.desktop} {
    > *:nth-child(3) {
      margin-right: 0;
    }
  }

  @media all ${screenSize.tablet} {
    flex-wrap: wrap;
    > *:nth-child(3) {
      display: none;
    }

    > *:nth-child(2) {
      margin-right: 0;
    }
  }

  @media all ${screenSize.mobile} {
    flex-wrap: wrap;
    > *:nth-child(3) {
      display: none;
    }

    > *:nth-child(2) {
      margin-right: 0;
    }
  }

  @media all ${screenSize.tiny} {
    flex-wrap: wrap;
    > *:nth-child(3),
    > *:nth-child(2) {
      display: none;
    }

    > * {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export const emptyContent = css`
  margin-bottom: 2.5rem;

  ${{ ...font.bodyNormal, color: withOpacity(color.darkerGreen, 70) }}
  text-align: center;
`;

export const previewCard = css`
  min-width: ${sizes.eventPreviewMinWidth};
  max-width: ${sizes.eventPreviewMaxWidth};
`;
