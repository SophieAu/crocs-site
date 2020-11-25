import { css } from 'linaria';

import { font } from '../_variables.styles';

export const sectionHeading = css`
  padding-top: 2rem;
`;

export const card = css`
  ${font.bodyNormal}

  margin-bottom: 2rem;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
