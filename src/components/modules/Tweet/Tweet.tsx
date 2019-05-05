import React, { StatelessComponent } from 'react';
import { generateRandomColorHex } from '../../../utils/color';
import CircleIcon from '../../elements/CircleIcon/CircleIcon';
import styles from './Tweet.module.scss';

interface ITweetProps {
  text: string;
  date: string;
}

const Tweet: StatelessComponent<ITweetProps> = ({ text, date }) => (
  <div className={styles.tweet}>
    <div>
      <CircleIcon color={generateRandomColorHex()} />
    </div>
    <div className={styles.content}>
      <p className={styles.tweetHeader}>
        <span className={styles.tweeter}>Some User</span>{' '}
        <span className={styles.userDate}>@someuser &#183; {date}</span>
      </p>
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  </div>
);

export default Tweet;
