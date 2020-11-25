import { FluidObject } from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import BorderCard from '../../elements/BorderCard';
import BorderImage from '../../elements/BorderImage';
import Card from '../../elements/Card';
import * as styles from './SignUpCardContainer.styles';

interface Props {
  category?: string;
  tag?: string;
  title: string;
  img: FluidObject;
  type?: 'border' | 'clean';
  className?: string;
}

const SignUpCardContainer: React.FC<Props> = props => {
  const { tag, category, title, img, children, type = 'clean', className } = props;

  const CardC = type === 'clean' ? Card : BorderCard;

  return (
    <CardC className={cx(styles.root, className)}>
      <BorderImage src={img}>
        {category && <p className={styles.category}>{category}</p>}
      </BorderImage>
      {tag && <p className={styles.tag}>{tag}</p>}
      <h3 className={styles.title}>{title}</h3>
      {children}
    </CardC>
  );
};

export default SignUpCardContainer;
