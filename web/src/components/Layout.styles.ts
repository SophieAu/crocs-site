import { css } from 'linaria';

import { color } from '../_variables.styles';

export const globalResets = css`
  :global() {
    :root {
      font-size: 16px;
    }

    html,
    body {
      border: 0;
      margin: 0;
      padding: 0;
      background-color: ${color.white};
    }

    body > div {
      background-color: ${color.lightGreen};
    }
  }
`;

export const main = css`
  flex: 1;
  max-width: 1024px;
  width: calc(100% - 2rem);
  margin: 1rem;

  align-self: center;
`;

export const root = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;
