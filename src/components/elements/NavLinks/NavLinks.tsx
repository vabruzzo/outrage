import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import styles from './NavLinks.module.scss';

const NavLinks: FunctionComponent = () => {
  const [veggieOpen, setVeggieOpen] = useState(false);

  const toggleVeggieOpen = () => setVeggieOpen(!veggieOpen);

  return (
    <div>
      <span className={styles.menu} onClick={toggleVeggieOpen}>
        Menu
      </span>
      <ul
        className={`${styles.linkList} ${
          veggieOpen ? styles.mobileActive : ''
        }`}
        onClick={toggleVeggieOpen}
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
