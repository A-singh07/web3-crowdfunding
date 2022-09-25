import React from 'react';
import styles from './testimonyCard.module.css';

const TestimonyCard = ({ data }) => {

  const { name, days, review } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.image}></div>
        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          <p className={styles.day}>{days}</p>
        </div>
      </div>
      <p className={styles.reviewContainer}>
        "{review}"
      </p>
    </div>
  )
}

export default TestimonyCard
