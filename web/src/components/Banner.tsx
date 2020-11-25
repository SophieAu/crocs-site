import { cx } from 'linaria';
import React from 'react';

import ExitButtonSvg from '../../data/img/header_exit_button.inline.svg';
import * as styles from './Banner.styles';

export enum State {
  IDLE = 'IDLE',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const levelStyle = {
  SUCCESS: styles.success,
  ERROR: styles.error,
};

interface Props {
  level: State;
  message: string;
  onClick: () => void;
  formId: string;
}

const Banner: React.FC<Props> = ({ level, message, onClick, formId }) =>
  level === State.IDLE ? null : (
    <output className={cx(styles.root, levelStyle[level])} form={formId}>
      <p className={styles.text}>{message}</p>
      <button className={styles.button} onClick={onClick}>
        <ExitButtonSvg />
      </button>
    </output>
  );

export default Banner;
