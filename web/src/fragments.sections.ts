import { graphql } from 'gatsby';

export const aboutSection = graphql`
  fragment aboutSection on SanityHomepage {
    hero {
      title
      subtitle
      bgImage {
        asset {
          fluid(maxWidth: 1024) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawIntroText
    }
  }
`;

export const contactSection = graphql`
  fragment contactSection on SanityHomepage {
    contact {
      title
      text
      socialMediaText
      twitter
      instagram
      facebook
    }
  }
`;

export const eventsSection = graphql`
  fragment eventsSection on SanityHomepage {
    events {
      title
      signupButtonText
      moreButtonText
      emptyText
      signupSuccess
      signupError
    }
  }
`;

export const membershipSection = graphql`
  fragment membershipSection on SanityHomepage {
    membership {
      title
      membership {
        ...membership
      }
    }
  }
`;

export const practiceSection = graphql`
  fragment practiceSection on SanityHomepage {
    practice {
      title
      osmUrl
      _rawText
    }
  }
`;

export const sponsorsSection = graphql`
  fragment sponsorsSection on SanityHomepage {
    sponsors {
      title
      sponsors {
        name
        website
        logo {
          asset {
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
