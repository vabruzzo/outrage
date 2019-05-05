import React, { StatelessComponent } from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

const Header: StatelessComponent = () => (
  <header className={styles.header}>
    <Nav />
  </header>
);

export default Header;
