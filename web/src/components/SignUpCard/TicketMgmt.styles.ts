import { css } from 'linaria';

import { color, font, screenSize } from '../../_variables.styles';
import { withOpacity } from '../../util';

export const inputSection = css`
  border: 1px solid ${color.darkGreen};
  border-radius: 0.25rem;
  padding: 0.25rem 0 0.5rem;

  table {
    border-collapse: collapse;
    width: 100%;

    > tbody > *:nth-child(2n):not(:last-child) {
      background-color: ${withOpacity(color.darkGreen, 10)};
    }

    tr {
      > *:first-child {
        padding-right: 1.25rem;
        padding-left: 0.75rem;

        @media all ${screenSize.tiny} {
          padding-right: 0.75rem;
          padding-left: 0.75rem;
        }
      }

      > *:last-child {
        padding-left: 0.375rem;
        padding-right: 0.75rem;

        text-align: right;
      }
    }

    td {
      ${font.bodySmall}
    }
  }
`;

export const ticketCateogry = css`
  td {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

export const totals = css`
  border-top: 1px solid ${color.darkGreen};

  > * {
    text-align: right;
    padding: 0.5rem 0 0;
  }
`;
