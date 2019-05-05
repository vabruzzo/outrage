import React, { StatelessComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import ButtonLink from '../../elements/ButtonLink/ButtonLink';
import styles from './Home.module.scss';

interface IHomeProps extends RouteComponentProps {}

const Home: StatelessComponent<IHomeProps> = () => (
  <section className={styles.section}>
    <h2>Welcome to the Digital Outrage Project</h2>
    <p>
      And just raise cain. Let's put some happy little clouds in our world. We
      start with a vision in our heart, and we put it on canvas.
    </p>
    <p>
      Clouds are free they come and go as they please. All you need to paint is
      a few tools, a little instruction, and a vision in your mind. And I will
      hypnotize that just a little bit. This is your world, whatever makes you
      happy you can put in it. Go crazy.
    </p>
    <p>
      <ButtonLink to="/classify" text="Classify tweets" />
      &nbsp;&nbsp;or&nbsp;&nbsp;
      <ButtonLink to="/vent" text="Vent" />
    </p>
  </section>
);

export default Home;
