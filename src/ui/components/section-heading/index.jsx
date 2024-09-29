import React from 'react';
import styles from './sectionHeading.module.scss';

const SectionHeading = ({heading}) => {
  return <h2 className={styles.sectionHeading}>{heading}</h2>;
};

export default SectionHeading;
