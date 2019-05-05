import React, { Component, ChangeEvent, MouseEvent } from 'react';
import Button from '../../elements/Button/Button';
import styles from './VentForm.module.scss';

interface IVentFormProps {
  handleSubmit: (event: MouseEvent) => void;
}

interface IVentFormState {
  [x: string]: any;
}

class VentForm extends Component<IVentFormProps, IVentFormState> {
  handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLButtonElement;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={styles.form}>
        <label htmlFor="ventSubject" className={styles.label}>
          Subject
        </label>
        <input
          id="ventSubject"
          name="ventSubject"
          className={styles.input}
          type="text"
          onChange={this.handleInputChange}
        />
        <label htmlFor="vent" className={styles.label}>
          Vent Away!
        </label>
        <textarea
          id="vent"
          name="vent"
          className={styles.textarea}
          onChange={this.handleInputChange}
        />
        <Button onClick={handleSubmit} text="Submit" type="submit" />
      </form>
    );
  }
}

export default VentForm;
