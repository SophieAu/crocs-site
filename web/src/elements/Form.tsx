import { css } from 'linaria';
import React from 'react';

const hiddenStyle = css`
  visibility: hidden;
  overflow: hidden;

  margin: 0 !important;
  height: 0;
  padding: 0;
  line-height: 0;
  width: 0;
`;

const HoneypotLabel = "Don’t fill this out if you're human: ";

interface Props {
  action: string;
  botField?: string;
  className?: string;
  hiddenFields: { nameId: string; label: string; value: string }[];
  nameId: string;
}

const Form: React.FC<Props> = props => {
  const { action, nameId, className, hiddenFields, children, botField = 'botField' } = props;

  return (
    <form
      action={action}
      className={className}
      data-netlify="true"
      data-netlify-recaptcha="true"
      id={nameId}
      method="post"
      name={nameId}
      netlify-honeypot={botField}
    >
      <div className={hiddenStyle}>
        <label htmlFor={botField}>{HoneypotLabel}</label>
        <input id={botField} name={botField} />
        {hiddenFields.map(f => (
          <>
            <label htmlFor={f.nameId}>{f.label}</label>
            <input id={f.nameId} name={f.nameId} readOnly value={f.value} />
          </>
        ))}
      </div>
      {children}
    </form>
  );
};

export default Form;
