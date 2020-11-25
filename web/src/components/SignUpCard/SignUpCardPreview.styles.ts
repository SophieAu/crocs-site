import { css } from 'linaria';

import { font, helper } from '../../_variables.styles';

export const meta = css`
  margin: 1rem 0 0;
`;

export const description = css`
  flex: 1;
  margin: 1rem 0;

  ${font.bodySmall}

  > p:first-child {
    margin-top: 0;
  }

  > p:last-child {
    margin-bottom: 0;
  }
`;

export const buttonContainer = css`
  ${helper.rightAligned}
  margin: 0 1rem 1rem;
`;
