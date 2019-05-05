import React, { StatelessComponent } from 'react';
import { Link } from '@reach/router';
import styles from './ButtonLink.module.scss';

interface IButtonLinkProps {
  to: string;
  text: string;
}

const getProps = () => ({ className: styles.buttonLink });

const Button: StatelessComponent<IButtonLinkProps> = ({ to, text }) => (
  <Link to={to} getProps={getProps}>
    {text}
  </Link>
);

export default Button;
