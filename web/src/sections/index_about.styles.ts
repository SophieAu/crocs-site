import { css } from 'linaria';

import { color, font, helper } from '../_variables.styles';
import { withOpacity } from '../util';

export const root = css`
  display: grid;
  grid-gap: 2rem;
`;

export const introCard = css`
  ${font.bodyNormal}

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const image = css`
  padding: 0;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
`;

export const overlay = css`
  ${helper.absoluteCover}
  background-image: linear-gradient(149deg, ${withOpacity(color.white, 0)} 0%, #ffffff 70%);

  padding: 1.5rem 1.5rem 2rem;

  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  grid-gap: 1.5rem;
  place-items: end;

  p {
    text-align: right;
    max-width: 24.5rem;
    margin: 0;
  }
`;

export const title = css`
  ${font.title}
`;

export const content = css`
  ${font.bodyNormal}
`;
