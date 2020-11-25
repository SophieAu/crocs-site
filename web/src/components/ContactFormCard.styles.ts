import { css } from 'linaria';

import { helper, screenSize, sizes } from '../_variables.styles';

export const container = css`
  overflow: unset;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2 * ${sizes.cardPadding});

  margin: 0;
  padding: ${sizes.cardPadding};

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  > *:nth-last-child(2) {
    flex: 1;
  }
`;

export const shortInput = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media all ${screenSize.tiny} {
    grid-template-columns: 1fr;
  }
`;

export const buttonContainer = css`
  ${helper.rightAligned}
`;
