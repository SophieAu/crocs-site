import { css } from 'linaria';

import { color, font } from '../_variables.styles';

export const root = css`
  background-color: ${color.white};
  border-top: 1rem solid ${color.gold};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 2px 16px 0 rgba(0, 0, 0, 0.12);

  padding: 1.5rem 0;

  p {
    ${{ ...font.bodyNormal, color: color.darkGreen }}
    text-align: center;
    margin: 0;
  }

  > *:not(:last-child) {
    padding-bottom: 0.75rem;
  }
`;
