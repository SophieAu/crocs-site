import { FluidImage, SanityBlock, SanityCard, SanityEvent, TicketCategory } from './types';

// --- INTERNAL TYPES
type SanityMembership = {
  title: string;
  name: string;
  image: FluidImage;
  _rawDescription: Block[];
  buttonText: string;
  categories: TicketCategory[];
  signupSuccess: string;
  signupError: string;
};

type SanityEventsSection = {
  events: {
    title: string;
    moreButtonText: string;
    signupButtonText: string;
    emptyText: string;
    signupSuccess: string;
    signupError: string;
  };
};

// --- PAGES
export type HomePageQueryResponse = {
  page: { title: string; hero: { _rawIntroText: SanityBlock[] } };
};

export type SubpageQueryResponse = {
  page: {
    title: string;
    cards?: SanityCard[];
    sections?: {
      _key?: string;
      title?: string;
      cards?: SanityCard[];
    }[];
  };
};

export type EventsQueryResponse = {
  categories: { nodes: { category?: string }[] };
  page: SanityEventsSection;
  events: { nodes?: SanityEvent[] };
};

export type JoinUsQueryResponse = {
  page: SanityMembership;
};

export type EventQueryResponse = {
  event: SanityEvent;
  page: SanityEventsSection;
};

// --- SECTIONS

export type AboutSectionQueryResponse = {
  about: {
    hero: {
      title: string;
      subtitle: string;
      bgImage: FluidImage;
      _rawIntroText: SanityBlock[];
    };
  };
};

export type ContactSectionQueryResponse = {
  contact: {
    contact: {
      title: string;
      text: string;
      socialMediaText: string;
      twitter?: string;
      instagram?: string;
      facebook?: string;
      email?: string;
    };
  };
};

export type EventsSectionQueryResponse = {
  eventSection: SanityEventsSection;
  events: { nodes?: SanityEvent[] };
};

export type MembershipSectionQueryResponse = {
  membership: {
    membership: {
      title: string;
      membership: SanityMembership;
    };
  };
};

export type PracticeSectionQueryResponse = {
  practice: {
    practice: {
      title: string;
      osmUrl: string;
      _rawText: Block[];
    };
  };
};

export type SponsorsSectionQueryResponse = {
  sponsors: {
    sponsors: {
      title: string;
      sponsors?: {
        name?: string;
        website?: string;
        logo: FluidImage;
      }[];
    };
  };
};

// --- COMPONENTS

export type FooterQueryResponse = {
  global: { copyrightHolder: string; footerText?: string };
};

export type GlobalsQueryResponse = {
  global: { title: string; contactEmail: string };
};
