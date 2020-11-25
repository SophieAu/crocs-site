import { css } from 'linaria';

import { color, font, screenSize, sizes } from '../_variables.styles';
import { withOpacity } from '../util';

export const eventContainer = css`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${sizes.eventPreviewMinWidth}, ${sizes.eventPreviewMaxWidth})
  );
  grid-gap: 1.25rem;
  grid-auto-rows: 1fr;

  place-items: stretch;
  justify-content: space-evenly;
`;

export const categories = css`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  @media all ${screenSize.tiny} {
    flex-wrap: wrap;
  }
`;

export const emptyContent = css`
  margin-bottom: 2.5rem;

  ${{ ...font.bodyNormal, color: withOpacity(color.darkerGreen, 70) }}
  text-align: center;
`;

export const categoryButton = css`
  margin: 1rem;
`;

export const previewCard = css`
  min-width: ${sizes.eventPreviewMinWidth};
  max-width: ${sizes.eventPreviewMaxWidth};
`;
