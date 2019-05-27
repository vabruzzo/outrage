import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  MouseEvent,
} from 'react';
import Button from '../../elements/Button/Button';
import styles from './VentForm.module.scss';

interface IVentFormProps {
  setHasSubmitted: () => void;
}

const VentForm: FunctionComponent<IVentFormProps> = ({ setHasSubmitted }) => {
  const [hasError, setHasError] = useState(false);
  const [vent, setVent] = useState('');
  const [ventSubject, setVentSubject] = useState('');

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    if (!vent || !ventSubject) {
      setHasError(true);
      return;
    }

    setHasSubmitted();
  };

  return (
    <form className={styles.form}>
      <p className={styles.error}>
        {hasError && 'Please fill out all fields before submitting.'}
      </p>
      <label htmlFor="ventSubject" className={styles.label}>
        Subject
      </label>
      <input
        id="ventSubject"
        name="ventSubject"
        className={styles.input}
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setVentSubject(event.currentTarget.value)
        }
      />
      <label htmlFor="vent" className={styles.label}>
        Vent Away!
      </label>
      <textarea
        id="vent"
        name="vent"
        className={styles.textarea}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setVent(event.currentTarget.value)
        }
      />
      <Button onClick={handleSubmit} text="Submit" type="submit" />
    </form>
  );
};

export default VentForm;
