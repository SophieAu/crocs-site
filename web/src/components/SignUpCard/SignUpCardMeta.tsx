import { cx } from 'linaria';
import React from 'react';

import calendar from '../../../data/img/calendar.svg';
import clock from '../../../data/img/clock.svg';
import map from '../../../data/img/map.svg';
import { SignUpMeta } from '../../types';
import { buildGoogleMapsUrl } from '../../util';
import * as styles from './SignUpCardMeta.styles';

interface Props {
  meta: SignUpMeta;
  className?: string;
}

const SignUpCardMeta: React.FC<Props> = ({ meta, className }) => {
  const { datetime, location } = meta;
  const date = datetime.toDateString();
  const time = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={cx(styles.root, className)}>
      <MetaItem icon={calendar}>{date}</MetaItem>
      <MetaItem icon={clock}>{time}</MetaItem>
      {location && (
        <MetaItem icon={map}>
          <a className={styles.location} href={buildGoogleMapsUrl(location)}>
            {location}
          </a>
        </MetaItem>
      )}
    </div>
  );
};

const MetaItem: React.FC<{ icon: string }> = ({ icon, children }) => (
  <p className={styles.metaItem}>
    <img alt="" src={icon} />
    {children}
  </p>
);

export default SignUpCardMeta;
