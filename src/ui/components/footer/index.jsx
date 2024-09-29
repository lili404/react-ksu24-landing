import React from 'react';
import styles from './footer.module.scss';
import FormInput from '../form-input';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <h2 className={styles.universityName}>
          Херсонський державний університет
        </h2>
        <div className={styles.footerFormWrapper}>
          <p className={styles.consultationText}>
            Ми допоможемо вам з вирішенням питань - залиште заявку на
            консультацію
          </p>
          <form className={styles.footerContactForm}>
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="Ім'я та прізвище"
            />
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Електронна пошта"
            />
            <FormInput
              type="tel"
              id="tel"
              name="tel"
              placeholder="Номер телефону"
            />
            <FormInput
              type="text"
              id="message"
              name="message"
              placeholder="Запитання"
            />
            <button type="submit" className={styles.formButton}>
              Відправити
            </button>
            <p className={styles.contactNote}>
              Якщо наш фахівець не зможе зв'язатися з Вами через месенджер
              (Telegram/Viber), ми напишемо на електронну пошту.
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
