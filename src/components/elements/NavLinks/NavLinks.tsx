import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import styles from './NavLinks.module.scss';

const NavLinks: FunctionComponent = () => {
  const [veggieOpen, setVeggieOpen] = useState(false);

  return (
    <div>
      <span className={styles.menu} onClick={() => setVeggieOpen(!veggieOpen)}>
        Menu
      </span>
      <ul
        className={`${styles.linkList} ${
          veggieOpen ? styles.mobileActive : ''
        }`}
        onClick={() => setVeggieOpen(false)}
      >
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
    </div>
  );
};

export default NavLinks;
