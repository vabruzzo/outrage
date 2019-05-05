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

class App extends Component {
  state = { tweets: null };

  async componentDidMount() {
    const tweets = await mockGet();
    this.setState({ tweets });
  }

  render() {
    const { tweets } = this.state;

    return (
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Router primary={false}>
            <Home path="/" />
            <Classify path="/classify" tweets={tweets} />
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
