import { cx } from 'linaria';
import React from 'react';

import { navigation } from '../../data/config';
import logo from '../../data/img/Logo.png';
import Card from '../elements/Card';
import { NavElem } from '../types';
import * as styles from './Header.styles';

const buildNav = (navElem: NavElem) => {
  if (!navElem.children)
    return (
      <div key={navElem.title} className={styles.navItem}>
        <a href={navElem.path}>{navElem.title}</a>
      </div>
    );

  return (
    <div key={navElem.title} className={cx(styles.navItem, styles.dropdownParent)}>
      <div>{navElem.title}</div>
      <Card className={styles.dropdown}>
        {navElem.children.map(cel => (
          <a key={cel.title} href={cel.path}>
            {cel.title}
          </a>
        ))}
      </Card>
    </div>
  );
};

const Header: React.FC = () => {
  const [home, ...navElems] = navigation;
  const leftNav = navElems.slice(0, navigation.length / 2);
  const rightNav = navElems.slice(navigation.length / 2);

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        {leftNav.map(buildNav)}
        <a className={styles.logoLink} href={home.path}>
          <img alt={home.title} className={styles.image} src={logo} />
        </a>
        {rightNav.map(buildNav)}
      </nav>
    </header>
  );
};

export default Header;
