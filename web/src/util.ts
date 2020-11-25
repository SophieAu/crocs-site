import { GOOGLE_MAPS_URL } from '../data/config';
import { SanityBlock, SanityEvent } from './types';

export const withOpacity = (color: string, opacity: number) => {
  if (opacity > 100 || opacity < 0) return color;

  const rawHexValue = Math.round((opacity / 100) * 255).toString(16);
  const hexValue = rawHexValue.length === 1 ? `0${rawHexValue}` : rawHexValue;

  return `${color}${hexValue}`;
};

export const removePastEvents = (event: SanityEvent) =>
  !!event.startTime ? new Date(event.startTime).getTime() > Date.now() : false;

export const buildGoogleMapsUrl = (location: string) =>
  `${GOOGLE_MAPS_URL}${location.replace(' ', '+')}`;

export const buildPageTitle = (siteTitle: string, title: string) => `${title} | ${siteTitle}`;

export const buildExcerpt = (content?: SanityBlock[], length = 100) => {
  if (!content) return '';

  let excerpt = '';
  let index = 0;
  do {
    const text = content[index].text || content[index].children[0].text;
    excerpt += ` ${text}`;
    index++;
  } while (excerpt.length < (length || 100) && index < content.length);

  return excerpt;
};
