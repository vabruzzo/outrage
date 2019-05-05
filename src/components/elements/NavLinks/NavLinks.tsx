import React, { StatelessComponent } from 'react';
import { Link } from '@reach/router';
import styles from './NavLinks.module.scss';

const NavLinks: StatelessComponent = () => (
  <ul className={styles.linkList}>
    <li className={styles.linkLi}>
      <Link to="/">Home</Link>
    </li>
    <li className={styles.linkLi}>
      <Link to="/classify">Classify</Link>
    </li>
    <li className={styles.linkLi}>
      <Link to="/vent">Vent</Link>
    </li>
    <li className={styles.linkLi}>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default NavLinks;
