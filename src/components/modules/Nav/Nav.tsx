import React from 'react';
import NavLogo from '../../elements/NavLogo/NavLogo';
import NavLinks from '../../elements/NavLinks/NavLinks';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <NavLogo />
    <NavLinks />
  </nav>
);

export default Nav;
