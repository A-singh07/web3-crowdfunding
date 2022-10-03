import React from 'react';
import TestimonyCard from '../card/TestimonyCard';
import styles from './testimonySection.module.css'

const TestimonySection = ({ heading, cardData }) => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.cardContainer}>
        {
          cardData.map((card, i) =>
            <TestimonyCard data={card} key={i} />
          )
        }
      </div>
    </section>
  )
}

export default TestimonySection
