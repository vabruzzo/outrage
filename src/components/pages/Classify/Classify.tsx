import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getDate } from '../../../utils/date';
import Tweet from '../../modules/Tweet/Tweet';
import Button from '../../elements/Button/Button';
import styles from './Classify.module.scss';

interface IClassifyProps extends RouteComponentProps {
  tweets:
    | {
        text: string;
        tweet_id: string;
        metadata: { title: string; description: string; image: string } | null;
      }[]
    | null;
}

const Classify: FunctionComponent<IClassifyProps> = ({ tweets }) => {
  const [currentTweet, setCurrentTweet] = useState(0);

  const handleClick = () => {
    setCurrentTweet(prevCurrentTweet => prevCurrentTweet + 1);
  };

  return (
    <>
      <h2>Help AI learn how to detect outrage</h2>
      <h3>Is the following social media message expressing moral outrage?</h3>
      {tweets && currentTweet < tweets.length ? (
        <>
          <Tweet tweet={tweets[currentTweet]} date={getDate()} />
          <div className={styles.buttons}>
            <Button text="😒 Not outrageous" onClick={handleClick} />
            <Button text="😾 Outrageous! 😡" onClick={handleClick} />
          </div>
        </>
      ) : tweets ? (
        <p>load more tweets</p>
      ) : null}
    </>
  );
};

export default Classify;
