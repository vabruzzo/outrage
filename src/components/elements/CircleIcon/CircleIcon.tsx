import React, { StatelessComponent } from 'react';
import styles from './CircleIcon.module.scss';

interface ICircleIconProps {
  color: string;
}

const CircleIcon: StatelessComponent<ICircleIconProps> = ({ color }) => (
  <div className={styles.circle} style={{ backgroundColor: color }} />
);

export default CircleIcon;
