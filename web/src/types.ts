import { FluidObject } from 'gatsby-image';

export type FluidImage = { asset: { fluid: FluidObject } };

export type NavElem = {
  title: string;
  path?: string;
  children?: NavElem[];
};

export type SanityBlock = {
  _key: string;
  _type: 'block' | 'span';
  marks: unknown[];
  text: string;
  children: Block[];
  markDefs: [];
  style: 'normal';
};

export type SanityEvent = {
  _id: string;
  name: string;
  image: FluidImage;
  category: { category?: string };
  tag?: string;
  startTime: Date;
  location?: string;
  excerpt: string;
  _rawDescription: SanityBlock[];
  tickets?: TicketCategory[];
};

export type SanityCard = {
  _key: string;
  _rawCardBody: Block[];
};

export type TicketCategory = { name: string; amount: string };
export type ReservationData = {
  tickets: { name: string; amount: string; cost: number }[];
  total: number;
};

export type SignUpMeta = { datetime: Date; location?: string };
