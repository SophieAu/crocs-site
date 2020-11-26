import { css, cx } from 'linaria';
import React from 'react';

import { color, font } from '../_variables.styles';
import { withOpacity } from '../util';

const rootStyle = css`
  display: flex;
  flex-direction: column;
`;

const labelStyle = css`
  margin-bottom: 0.125rem;

  ${font.bodySmall}
`;

const inputStyle = css`
  background: ${color.white};
  border-radius: 0.25rem;
  border: 1px solid ${color.darkGreen};
  box-shadow: inset 3px 3px 3px 0 ${withOpacity(color.darkerGreen, 5)};
  padding: 0.25rem 0.75rem;

  height: 100%;
  resize: none;

  ${font.bodySmall}

  &:focus, &:active {
    outline: ${color.gold} auto 1px;
  }
`;

interface Props {
  label: string;
  nameId: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'textarea' | 'input';
  className?: string;
  required?: boolean;
}

const Input: React.FC<Props> = props => {
  const { className, label, nameId, value, onChange, required, type = 'input' } = props;

  return (
    <div className={cx(rootStyle, className)}>
      <label className={labelStyle} htmlFor={nameId}>
        {label}
      </label>
      {type === 'input' ? (
        <input
          className={inputStyle}
          id={nameId}
          name={nameId}
          required={required}
          type="text"
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          className={inputStyle}
          id={nameId}
          name={nameId}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
