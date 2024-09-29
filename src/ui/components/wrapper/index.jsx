import React from 'react';
import styles from './wrapper.module.scss';

import Intro from '../intro';
import Goals from '../goals';
import Opportunities from '../opportunities';

const Wrapper = () => {
  return (
    <>
      <div className={styles.sectionsWrapper}>
        <div className={styles.contentWrapper}>
          <Intro />
          <Goals />
          <Opportunities />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
