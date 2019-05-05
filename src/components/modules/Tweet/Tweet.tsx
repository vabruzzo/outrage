import React, { StatelessComponent } from 'react';
import { generateRandomColorHex } from '../../../utils/color';
import CircleIcon from '../../elements/CircleIcon/CircleIcon';
import { Tweet as TweetType } from '../../App/App';
import styles from './Tweet.module.scss';

interface ITweetProps {
  tweet: TweetType;
  date: string;
}

const Tweet: StatelessComponent<ITweetProps> = ({ tweet, date }) => (
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
          __html: tweet.text,
        }}
      />
      {tweet.metadata && (
        <>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={tweet.metadata.image} />
          </div>
          <div className={styles.metadataText}>
            <p className={styles.title}>{tweet.metadata.title}</p>
            <p className={styles.description}>{tweet.metadata.description}</p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default Tweet;
