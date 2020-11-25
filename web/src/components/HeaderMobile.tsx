import { cx } from 'linaria';
import React, { useEffect, useReducer } from 'react';

import { navigation } from '../../data/config';
import ExitButtonSvg from '../../data/img/header_exit_button.inline.svg';
import HamburgerButtonSvg from '../../data/img/header_hamburger_button.inline.svg';
import logo from '../../data/img/Logo.png';
import { NavElem } from '../types';
import * as styles from './HeaderMobile.styles';

const buildNav = (navElem: NavElem) => {
  if (!navElem.children)
    return (
      <a key={navElem.title} className={styles.navItem} href={navElem.path}>
        {navElem.title}
      </a>
    );

  return navElem.children.map(cel => (
    <a key={cel.title} className={styles.navItem} href={cel.path}>
      {`${navElem.title} - ${cel.title}`}
    </a>
  ));
};

const menuToggleReducer = (oldStatus: boolean) => {
  const shouldShowMenu = !oldStatus;

  document.body.style.overflow = shouldShowMenu ? 'hidden' : '';
  return shouldShowMenu;
};

const MobileMenu: React.FC = () => {
  const [showMenu, toggleMenu] = useReducer(menuToggleReducer, false);

  useEffect(() => {
    showMenu && toggleMenu();
  }, []);

  return (
    <header className={styles.root}>
      <img alt={'Crocs Logo'} className={styles.image} src={logo} />
      <button className={styles.button} onClick={toggleMenu}>
        <HamburgerButtonSvg />
      </button>
      <div className={cx(styles.navWrapper, !showMenu && styles.hiddenNav)}>
        <nav className={styles.nav}>{navigation.map(buildNav)}</nav>
        <button className={cx(styles.button, styles.exitButton)} onClick={toggleMenu}>
          <ExitButtonSvg />
        </button>
      </div>
    </header>
  );
};

export default MobileMenu;
