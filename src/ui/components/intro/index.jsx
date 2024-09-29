import React from 'react';
import styles from './intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introWrapper}>
        <div className={styles.introIcoWrapper}>
          <img src="/images/ksu_logo.png" alt="Логотип університету" />
        </div>
        <h1 className={styles.introTitle}>Електронний сервіс KSU24</h1>
        <p className={styles.introDescription}>
          Оптимізуйте навчальний процес університету та забезпечте ефективну
          роботу його бізнес-процесів з KSU24.
        </p>
        <div className={styles.btnWrapper}>
          <a href="">Зареєструватися</a>
          <a href="">Увійти</a>
        </div>
      </div>
      <div className={styles.introImgWrapper}>
        <img src="/images/app-demo.png" alt="Демонстрація сервісу" />
      </div>
    </section>
  );
};

export default Intro;
