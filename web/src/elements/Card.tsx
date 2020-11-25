import { css, cx } from 'linaria';
import React from 'react';

import { color, sizes } from '../_variables.styles';
import { withOpacity } from '../util';

const rootStyle = css`
  background: ${color.white};
  box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 11)},
    2px 3px 16px 0 ${withOpacity(color.darkerGreen, 14)};
  border-radius: 0.625rem;

  padding: ${sizes.cardPadding};
  overflow: hidden;
`;

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => (
  <div className={cx(rootStyle, className)}>{children}</div>
);

export default Card;
