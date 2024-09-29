import React from 'react';
import styles from './card.module.scss';

const Card = ({title, description, image_url, image_alt}) => {
  return (
    <div className={styles.cardItem}>
      {image_url && (
        <div className={styles.cardItemImageWrapper}>
          <img src={image_url} alt={image_alt} />
        </div>
      )}
      <div className={styles.cardItemTextWrapper}>
        <h3 className={styles.cardItemTitle}>{title}</h3>
        <hr className={styles.cardItemSeparator} />
        <p className={styles.cardItemDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
