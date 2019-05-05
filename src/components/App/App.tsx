import React, { Component } from 'react';
import { Router } from '@reach/router';
import { mockGet } from '../../utils/http';
import Home from '../pages/Home/Home';
import Classify from '../pages/Classify/Classify';
import Vent from '../pages/Vent/Vent';
import About from '../pages/About/About';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import styles from './App.module.scss';

export type Tweet = {
  text: string;
  tweet_id: string;
  metadata?: { title?: string; description?: string; image?: string } | null;
};

interface IAppProps {}

interface IAppState {
  tweets: Tweet[] | null;
  currentTweet: number;
}

class App extends Component<IAppProps, IAppState> {
  state = { tweets: null, currentTweet: 0 };

  async componentDidMount() {
    const tweets = await mockGet();
    this.setState({ tweets });
  }

  setCurrentTweet = () => {
    this.setState(prevState => ({ currentTweet: prevState.currentTweet + 1 }));
  };

  render() {
    const { tweets, currentTweet } = this.state;

    return (
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Router primary={false}>
            <Home path="/" />
            <Classify
              path="/classify"
              tweets={tweets}
              currentTweet={currentTweet}
              setCurrentTweet={this.setCurrentTweet}
            />
            <Vent path="/vent" />
            <About path="/about" />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
