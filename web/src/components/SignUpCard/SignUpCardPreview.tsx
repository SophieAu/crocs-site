import { FluidObject } from 'gatsby-image';
import React from 'react';

import { LinkButton } from '../../elements/Button';
import { SignUpMeta } from '../../types';
import SignUpCardContainer from './SignUpCardContainer';
import SignUpCardMeta from './SignUpCardMeta';
import * as styles from './SignUpCardPreview.styles';

interface Props {
  category?: string;
  tag?: string;
  title: string;
  meta?: SignUpMeta;
  description: string;
  to: string;
  img: FluidObject;
  buttonText: string;
  type?: 'border' | 'clean';
  className?: string;
}

const SignUpCardPreview: React.FC<Props> = props => {
  const { meta, description, to, buttonText, ...containerProps } = props;

  return (
    <SignUpCardContainer {...containerProps}>
      {meta && <SignUpCardMeta className={styles.meta} meta={meta} />}
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <LinkButton href={to}>{buttonText}</LinkButton>
      </div>
    </SignUpCardContainer>
  );
};

export default SignUpCardPreview;
