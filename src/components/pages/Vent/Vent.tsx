import React, { FunctionComponent, useState } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import VentForm from '../../modules//VentForm/VentForm';
import Button from '../../elements/Button/Button';

interface IVentProps extends RouteComponentProps {}

const Vent: FunctionComponent<IVentProps> = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <section>
      <h2>Vent Your Outrage!</h2>
      {hasSubmitted ? (
        <p>
          Thank you! Be sure to <Link to="/classify">classify some tweets</Link>{' '}
          if you have a few minutes. Or:{' '}
          <Button onClick={() => setHasSubmitted(false)} text="Vent again" />
        </p>
      ) : (
        <>
          <p>
            In today’s political climate, there are many things people can be
            outraged about!{' '}
            <a
              href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2007.01916.x"
              target="_blank"
              rel="noopener noreferrer"
            >
              Psychological research
            </a>{' '}
            suggests that putting your feelings into words can help you feel
            better about them. You are welcome here to vent about outrage you're
            feeling in a “free expression” way: it can help us learn about
            outrage and also help you feel better.{' '}
          </p>
          <VentForm setHasSubmitted={() => setHasSubmitted(true)} />
        </>
      )}
    </section>
  );
};

export default Vent;
