/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from 'linaria';
import React, { useReducer, useState } from 'react';

import { LAMBDA_BASE, SIGN_UP_API } from '../../../data/config';
import { strings } from '../../../data/strings';
import { useBannerContext } from '../../BannerContext';
import { Button } from '../../elements/Button';
import Form from '../../elements/Form';
import Input from '../../elements/Input';
import { TicketCategory } from '../../types';
import { State } from '../Banner';
import * as styles from './SignUpCardForm.styles';
import TicketMgmt from './TicketMgmt';

const hiddenFields = (id: string) => [
  { nameId: 'id', label: 'Sign-Up Id', value: id },
  { nameId: 'paid', label: 'Paid', value: 'false' },
];

const postForm = async (data: object) =>
  fetch(`${LAMBDA_BASE}${SIGN_UP_API}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

const reducerFn = (tickets: any, n: TicketCategory) => ({ ...tickets, [n.name]: n.amount });
const initialState = (tickets: TicketCategory[]) =>
  tickets.reduce((cats, c) => ({ ...cats, [c.name]: 0 }), {} as any);

interface Props {
  className: string;
  buttonText: string;
  signUpId: string;
  categories: TicketCategory[];
  successMessage: string;
  errorMessage: string;
}

const SignUpCardForm: React.FC<Props> = props => {
  const { buttonText, className, signUpId, categories, successMessage, errorMessage } = props;

  const [tickets, updateTickets] = useReducer(reducerFn, initialState(categories));
  const [isSubmitting, setSubmitting] = useState(false);
  const formId = `${signUpId}-signup`;

  const { setBannerState } = useBannerContext();
  const useBanner = (level: State, message: string) => setBannerState({ formId, level, message });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      botField: (document.getElementById('botField') as HTMLInputElement)?.value,
      id: (document.getElementById('id') as HTMLInputElement)?.value,
      paid: (document.getElementById('paid') as HTMLInputElement)?.value,
      name: (document.getElementById('name') as HTMLInputElement)?.value,
      email: (document.getElementById('email') as HTMLInputElement)?.value,
      ...tickets,
    };

    const response = await postForm(formData);
    if (response.status !== 200) useBanner(State.ERROR, errorMessage);
    else useBanner(State.SUCCESS, successMessage);

    setSubmitting(false);
  };

  return (
    <Form
      action={`${LAMBDA_BASE}${SIGN_UP_API}`}
      botField={'botField'}
      className={cx(styles.root, className)}
      hiddenFields={hiddenFields(signUpId.split('-')[0])}
      nameId={formId}
    >
      {!!categories.length && <TicketMgmt categories={categories} onTicketChange={updateTickets} />}
      <Input className={styles.textInput} label={strings.form.name} nameId="name" />
      <Input className={styles.textInput} label={strings.form.email} nameId="email" />
      <div className={styles.buttonContainer}>
        <Button disabled={isSubmitting} type="submit" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </div>
    </Form>
  );
};

export default SignUpCardForm;
