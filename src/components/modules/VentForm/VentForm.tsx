import React, { Component, ChangeEvent, MouseEvent } from 'react';
import Button from '../../elements/Button/Button';
import styles from './VentForm.module.scss';

interface IVentFormProps {
  setHasSubmitted: () => void;
}

interface IVentFormState {
  hasError: boolean;
  vent: string;
  ventSubject: string;
  [x: string]: any;
}

class VentForm extends Component<IVentFormProps, IVentFormState> {
  state = {
    hasError: false,
    vent: '',
    ventSubject: '',
  };

  handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLButtonElement;
    this.setState({
      [target.name]: target.value,
      hasError: false,
    });
  };

  handleSubmit = (event: MouseEvent) => {
    const { vent, ventSubject } = this.state;
    event.preventDefault();

    if (!vent || !ventSubject) {
      this.setState({ hasError: true });
      return;
    }

    this.props.setHasSubmitted();
  };

  render() {
    const { hasError } = this.state;

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
        <Button onClick={this.handleSubmit} text="Submit" type="submit" />
      </form>
    );
  }
}

export default VentForm;
