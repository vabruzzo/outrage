import React, { StatelessComponent, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getDate } from '../../../utils/date';
import Tweet from '../../modules/Tweet/Tweet';
import Button from '../../elements/Button/Button';
import { Tweet as TweetType } from '../../App/App';
import styles from './Classify.module.scss';

interface IClassifyProps extends RouteComponentProps {
  tweets: TweetType[] | null;
  currentTweet: number;
  setCurrentTweet: () => void;
}

const Classify: StatelessComponent<IClassifyProps> = ({
  tweets,
  currentTweet,
  setCurrentTweet,
}) => {
  const [hasImageError, setHasImageError] = useState(false);
  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    if (sectionRef.current) {
      //@ts-ignore
      sectionRef.current.focus();
    }
    setCurrentTweet();
    setHasImageError(false);
  };

  const handleImageError = () => {
    setHasImageError(true);
  };

  return (
    <section className={styles.section} ref={sectionRef} tabIndex={-1}>
      <h2>Help AI learn how to detect outrage</h2>
      <h3>Is the following social media message expressing moral outrage?</h3>
      {tweets && currentTweet < tweets.length ? (
        <>
          <Tweet
            tweet={tweets[currentTweet]}
            date={getDate()}
            handleImageError={handleImageError}
          />
          <div className={styles.buttons}>
            {hasImageError ? (
              <p className={styles.error}>
                This tweet does not appear to have loaded properly, please skip
                it.
                <Button text="Skip tweet" onClick={handleButtonClick} />
              </p>
            ) : (
              <>
                <Button text="😒 Not outrageous" onClick={handleButtonClick} />
                <Button text="😾 Outrageous! 😡" onClick={handleButtonClick} />
              </>
            )}
          </div>
        </>
      ) : tweets ? (
        <p>load more tweets</p>
      ) : null}
    </section>
  );
};

export default Classify;
