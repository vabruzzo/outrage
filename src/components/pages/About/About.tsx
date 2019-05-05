import React, { StatelessComponent, Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import styles from './About.module.scss';

interface IAboutProps extends RouteComponentProps {}

const About: StatelessComponent<IAboutProps> = () => (
  <Fragment>
    <section className={styles.section}>
      <h2>About the Project</h2>
      <p>
        Don't fight it, use what happens. I will take some magic white, and a
        little bit of Vandyke brown and a little touch of yellow. We'll put some
        happy little leaves here and there. We might as well make some Almighty
        mountains today as well, what the heck. In life you need colors.
        Imagination is the key to painting. Isn't it great to do something you
        can't fail at? Let that brush dance around there and play. Let's make a
        happy little mountain now. Don't kill all your dark areas - you need
        them to show the light.
      </p>
      <p>
        Volunteering your time; it pays you and your whole community fantastic
        dividends. This is gonna be a happy little seascape. Look around, look
        at what we have. Beauty is everywhere, you only have to look to see it.
        Let all these things just sort of happen. No pressure. Just relax and
        watch it happen.
      </p>
    </section>
    <section className={styles.section}>
      <h2>About the Crockett Lab</h2>
      <p>
        And right there you got an almighty cloud. We'll have a super time.
        Everybody needs a friend. Painting should do one thing. It should put
        happiness in your heart. Every single thing in the world has its own
        personality - and it is up to you to make friends with the little
        rascals.
      </p>
      <p>
        Any little thing can be your friend if you let it be. And I know you're
        saying, 'Oh Bob, you've done it this time.' And you may be right. I
        guess that would be considered a UFO. A big cotton ball in the sky. It's
        so important to do something every day that will make you happy.
      </p>
    </section>
    <section className={styles.section}>
      <h2>In the Media</h2>
      <ul>
        <li>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            Moral Outrage in the Digital Age with Molly Crockett
          </a>
        </li>{' '}
        <li>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            Moral Outrage in the Digital Age with Molly Crockett
          </a>
        </li>{' '}
        <li>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            Moral Outrage in the Digital Age with Molly Crockett
          </a>
        </li>
      </ul>
      <p>
        Everyone is going to see things differently - and that's the way it
        should be. And right there you got an almighty cloud. You can do it.
        That easy. Let your imagination just wonder around when you're doing
        these things. Use absolutely no pressure. Just like an angel's wing.
      </p>
    </section>
  </Fragment>
);

export default About;
