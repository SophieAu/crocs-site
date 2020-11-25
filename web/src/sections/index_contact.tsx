import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import facebookIcon from '../../data/img/facebook.svg';
import instagramIcon from '../../data/img/instagram.svg';
import twitterIcon from '../../data/img/twitter.svg';
import { strings } from '../../data/strings';
import ContactFormCard from '../components/ContactFormCard';
import Card from '../elements/Card';
import Heading from '../elements/Heading';
import { ContactSectionQueryResponse } from '../types.queryResponses';
import * as styles from './index_contact.styles';

const icons = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  twitter: twitterIcon,
};

const query = graphql`
  query {
    contact: sanityHomepage {
      ...contactSection
    }
  }
`;

const ContactSection: React.FC = () => {
  const result = useStaticQuery<ContactSectionQueryResponse>(query);
  const { title, text, facebook, instagram, socialMediaText, twitter } = result.contact.contact;

  const socialMedia = { facebook, instagram, twitter };
  type Platform = keyof typeof socialMedia;
  const socialMediaKeys = Object.keys(socialMedia).filter(k => socialMedia[k as Platform]);

  return (
    <section className={styles.root}>
      <Heading>{title}</Heading>
      <Card>
        <p className={styles.infotext}>{text}</p>
      </Card>
      <Card className={styles.socialMediaCard}>
        <p className={styles.infotext}>{socialMediaText}</p>
        <div className={styles.socialMediaLinkContainer}>
          {socialMediaKeys.map(key => (
            <a key={key} className={styles.socialMediaLink} href={socialMedia[key as Platform]}>
              <img alt={strings.alt[key as Platform]} src={icons[key as Platform]} />
            </a>
          ))}
        </div>
      </Card>
      <ContactFormCard />
    </section>
  );
};

export default ContactSection;
