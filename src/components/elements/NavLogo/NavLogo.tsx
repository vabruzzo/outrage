import React, { StatelessComponent } from 'react';
import styles from './NavLogo.module.scss';

const NavLogo: StatelessComponent = () => (
  <h1 className={styles.logo}>
    <span className={styles.emoticon}>&#128545;</span> Digital Outrage Project
  </h1>
);

export default NavLogo;
