import { graphql } from 'gatsby';

export const event = graphql`
  fragment event on SanityEvent {
    _id
    name
    image {
      asset {
        fluid(maxWidth: 1024) {
          ...GatsbySanityImageFluid
        }
      }
    }
    category {
      category
    }
    tag
    startTime
    location
    tickets {
      name
      amount
    }
    excerpt
    _rawDescription
  }
`;

export const membership = graphql`
  fragment membership on SanityMembership {
    title
    name
    categories {
      name
      amount
    }
    image {
      asset {
        fluid(maxWidth: 1024) {
          ...GatsbySanityImageFluid
        }
      }
    }
    _rawDescription
    buttonText
    signupSuccess
    signupError
  }
`;

export const footer = graphql`
  fragment footer on SanitySiteSettings {
    footerText
    copyrightHolder
  }
`;

export const globals = graphql`
  fragment globals on SanitySiteSettings {
    contactEmail
    title
  }
`;
