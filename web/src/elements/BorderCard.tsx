import { css, cx } from 'linaria';
import React from 'react';

import { color } from '../_variables.styles';
import { withOpacity } from '../util';

const rootStyle = css`
  background: ${color.white};
  box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 11)},
    2px 3px 16px 0 ${withOpacity(color.darkerGreen, 14)};
  border-radius: 0.625rem;
  border: solid 0.25rem ${color.gold};

  overflow: hidden;
`;

interface Props {
  className?: string;
}

const BorderCard: React.FC<Props> = ({ children, className }) => (
  <div className={cx(rootStyle, className)}>{children}</div>
);

export default BorderCard;
