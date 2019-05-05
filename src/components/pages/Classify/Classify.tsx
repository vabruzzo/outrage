import React, { Component } from 'react';
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

interface IClassifyState extends RouteComponentProps {
  currentTweet: number;
}

class Classify extends Component<IClassifyProps, IClassifyState> {
  state = {
    currentTweet: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({ currentTweet: prevState.currentTweet + 1 }));
  };

  render() {
    const { tweets } = this.props;
    const { currentTweet } = this.state;

    return (
      <>
        <h2>Help AI learn how to detect outrage</h2>
        <h3>Is the following social media message expressing moral outrage?</h3>
        {tweets && currentTweet < tweets.length ? (
          <>
            <Tweet tweet={tweets[currentTweet]} date={getDate()} />
            <div className={styles.buttons}>
              <Button text="😒 Not outrageous" onClick={this.handleClick} />
              <Button text="😾 Outrageous! 😡" onClick={this.handleClick} />
            </div>
          </>
        ) : tweets ? (
          <p>load more tweets</p>
        ) : null}
      </>
    );
  }
}

export default Classify;
