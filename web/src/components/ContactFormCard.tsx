import React from 'react';

import { strings } from '../../data/strings';
import BorderCard from '../elements/BorderCard';
import { Button } from '../elements/Button';
import Form from '../elements/Form';
import Input from '../elements/Input';
import * as styles from './ContactFormCard.styles';

const ContactFormCard: React.FC = () => (
  <BorderCard className={styles.container}>
    <Form action={'/'} className={styles.form} hiddenFields={[]} nameId="contact">
      <div className={styles.shortInput}>
        <Input label={strings.form.name} nameId="name" />
        <Input label={strings.form.email} nameId="email" />
      </div>
      <Input label={strings.form.subject} nameId="subject" />
      <Input label={strings.form.message} nameId="message" type="textarea" />
      <div className={styles.buttonContainer}>
        <Button type="submit">{strings.form.sendButtonText}</Button>
      </div>
    </Form>
  </BorderCard>
);

export default ContactFormCard;
