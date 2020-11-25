import { css } from 'linaria';
import React from 'react';

import { font } from '../_variables.styles';

const rootStyle = css`
  ${font.headingLarge}

  text-align: center;
  margin: 0 0 2rem;
`;

const Heading: React.FC = ({ children }) => <h2 className={rootStyle}>{children}</h2>;

export default Heading;
