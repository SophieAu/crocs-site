import BlockContent from '@sanity/block-content-to-react';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import { SignUpMeta, TicketCategory } from '../../types';
import SignUpCardContainer from './SignUpCardContainer';
import SignUpCardForm from './SignUpCardForm';
import * as styles from './SignUpCardFull.styles';
import SignUpCardMeta from './SignUpCardMeta';

interface Props {
  tag?: string;
  category?: string;
  title: string;
  meta?: SignUpMeta;
  content: Block[];
  img: FluidObject;
  buttonText: string;
  signUpId: string;
  ticketCategories: TicketCategory[];
  type?: 'border' | 'clean';
  successMessage: string;
  errorMessage: string;
}

const SignUpCard: React.FC<Props> = props => {
  const { signUpId, tag, category, title, meta, content, img, ticketCategories } = props;
  const { buttonText, type = 'clean', successMessage, errorMessage } = props;

  return (
    <SignUpCardContainer category={category} img={img} tag={tag} title={title} type={type}>
      <div className={styles.content}>
        {meta && <SignUpCardMeta className={styles.meta} meta={meta} />}
        <div className={styles.description}>
          <BlockContent blocks={content} />
        </div>
        <SignUpCardForm
          buttonText={buttonText}
          categories={ticketCategories}
          className={styles.form}
          errorMessage={errorMessage}
          signUpId={signUpId}
          successMessage={successMessage}
        />
      </div>
    </SignUpCardContainer>
  );
};

export default SignUpCard;
