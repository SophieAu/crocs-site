import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const sectionSpacing = css`
  & > section {
    margin-bottom: 5rem;
  }

  @media all ${screenSize.mobile} {
    & > section:last-child {
      margin-bottom: 1rem;
    }
  }
`;
