import React from 'react';
import FundCard from '../card/FundCard';
import styles from './cardSection.module.css';

const CardSection = ({ heading, fundsData }) => {

  return (
    <section className={styles.wrapper}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.cardContainer}>
        {
          fundsData && fundsData.map((data, i) =>
            i < 3 &&
            <FundCard
              category={data.category}
              heading={data.heading}
              description={data.description}
              raisedAmount={data.raisedAmount}
              targetAmount={data.targetAmount}
              progress={data.progress}
              key={i}
            />
          )
        }
      </div>
    </section>
  )
}

export default CardSection
