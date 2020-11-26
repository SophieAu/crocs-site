import { css, cx } from 'linaria';
import React from 'react';

import { color, font } from '../_variables.styles';
import { withOpacity } from '../util';

const baseStyle = css`
  display: inline-block;
  border-radius: 0.75rem;

  ${font.button};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.6;
    cursor: default;
  }
`;

const solidStyle = css`
  background: ${color.gold};
  border: none;
  padding: 0.75rem 2rem 0.625rem;

  &:hover {
    background: ${withOpacity(color.gold, 70)};
  }
  &:focus {
    background: ${withOpacity(color.gold, 50)};
  }
  &:active {
    background: ${withOpacity(color.gold, 80)};
  }

  &[disabled] {
    background: ${withOpacity(color.gold, 50)};
  }
`;

const outlineStyle = css`
  border: 0.25rem solid ${color.darkerGreen};
  padding: 0.75rem 1.5rem;

  &:hover {
    background: ${withOpacity(color.white, 12)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 6)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 7)};
  }
  &:focus {
    background: ${withOpacity(color.white, 25)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 11)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 14)};
  }
  &:active {
    background: ${withOpacity(color.white, 6)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 6)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 7)};
  }
`;

const baseToggleStyle = css`
  border: 3px solid;
  padding: 0.5rem;

  color: ${withOpacity(color.darkerGreen, 80)};
`;

const toggleStyleActive = css`
  background: ${color.gold};
  border-color: ${color.gold};

  &:hover {
    background: ${withOpacity(color.gold, 70)};
    border-color: ${withOpacity(color.gold, 70)};
  }
  &:focus {
    background: ${withOpacity(color.gold, 50)};
    border-color: ${withOpacity(color.gold, 50)};
  }
  &:active {
    background: ${withOpacity(color.gold, 80)};
    border-color: ${withOpacity(color.gold, 80)};
  }
`;

const toggleStyleInactive = css`
  background: none;
  border-color: ${withOpacity(color.gold, 75)};

  &:hover {
    background: ${withOpacity(color.white, 12)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 6)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 7)},
      inset 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 2)},
      inset 2px 3px 16px 0 ${withOpacity(color.darkerGreen, 4)};
  }
  &:focus {
    background: ${withOpacity(color.white, 25)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 11)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 14)},
      inset 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 3)},
      inset 2px 3px 16px 0 ${withOpacity(color.darkerGreen, 6)};
  }
  &:active {
    background: ${withOpacity(color.white, 6)};
    box-shadow: 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 6)},
      2px 3px 16px 0 ${withOpacity(color.darkerGreen, 7)},
      inset 2px 3px 4px 0 ${withOpacity(color.darkerGreen, 2)},
      inset 2px 3px 16px 0 ${withOpacity(color.darkerGreen, 4)};
  }
`;

const style = {
  solid: solidStyle,
  outline: outlineStyle,
};

interface ButtonType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  styling?: 'solid' | 'outline';
}

export const Button: React.FC<ButtonType> = props => (
  <button {...props} className={cx(baseStyle, style[props.styling || 'solid'], props.className)}>
    {props.children}
  </button>
);

interface AnchorType
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  styling?: 'solid' | 'outline';
}

export const LinkButton: React.FC<AnchorType> = props => (
  <a {...props} className={cx(baseStyle, style[props.styling || 'solid'], props.className)}>
    {props.children}
  </a>
);

interface ToggleButtonType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
}

export const ToggleButton: React.FC<ToggleButtonType> = props => (
  <button
    {...props}
    className={cx(
      baseStyle,
      baseToggleStyle,
      props.isActive ? toggleStyleActive : toggleStyleInactive,
      props.className
    )}
  >
    {props.children}
  </button>
);
