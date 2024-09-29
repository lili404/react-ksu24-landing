import React from 'react';
import styles from './formInput.module.scss';

const FormInput = ({type, id, name, placeholder}) => (
  <input
    type={type}
    id={id}
    name={name}
    className={styles.formInput}
    placeholder={placeholder}
  />
);

export default FormInput;
