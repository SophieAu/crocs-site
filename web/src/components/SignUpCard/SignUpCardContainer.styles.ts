import { css } from 'linaria';

import { color, font } from '../../_variables.styles';
import { withOpacity } from '../../util';

export const root = css`
  display: flex;
  flex-direction: column;

  padding: 0;
  overflow: hidden;

  > *:not(:first-child) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const category = css`
  display: inline-block;
  margin: 0.75rem;
  padding: 0.5rem;

  background: ${withOpacity(color.gold, 75)};
  border-radius: 0.5rem;

  ${font.label}
`;

export const tag = css`
  margin: 0 1rem;

  ${font.label}
`;

export const title = css`
  margin: 0.5rem 1rem 0;

  ${font.headingNormal}
`;
