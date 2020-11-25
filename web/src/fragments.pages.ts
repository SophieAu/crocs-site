import { graphql } from 'gatsby';

// --- PAGES
export const homePage = graphql`
  fragment homePage on SanityHomepage {
    title
    hero {
      _rawIntroText
    }
  }
`;

export const aboutUsPage = graphql`
  fragment aboutUsPage on SanityAbout {
    title
    cards: content {
      _key
      _rawCardBody
    }
    sections {
      _key
      title
      cards: card {
        _key
        _rawCardBody
      }
    }
  }
`;

export const eventCategories = graphql`
  fragment eventCategories on SanityEventCategoryConnection {
    nodes {
      category
    }
  }
`;

export const allEvents = graphql`
  fragment allEvents on SanityEventConnection {
    nodes {
      ...event
    }
  }
`;

export const ladiesTeamPage = graphql`
  fragment ladiesTeamPage on SanityLadies {
    title
    cards: content {
      _key
      _rawCardBody
    }
    sections {
      _key
      title
      cards: card {
        _key
        _rawCardBody
      }
    }
  }
`;

export const mensTeamPage = graphql`
  fragment mensTeamPage on SanityMen {
    title
    cards: content {
      _key
      _rawCardBody
    }
    sections {
      _key
      title
      cards: card {
        _key
        _rawCardBody
      }
    }
  }
`;
