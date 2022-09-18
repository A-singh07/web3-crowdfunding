import React from 'react';
import FundCard from '../card/FundCard';
import styles from './cardSection.module.css';

const CardSection = ({ heading, fundsData, style }) => {

  return (
    <section className={styles.wrapper} style={style}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.cardContainer}>
        {
          fundsData && fundsData.length !== 0 ?
            fundsData.map((data, i) =>
              i < 3 &&
              <FundCard
                key={data.id}
                id={data.id}
                category={data.category}
                heading={data.heading}
                description={data.description}
                raisedAmount={data.raisedAmount}
                targetAmount={data.targetAmount}
                progress={data.progress}
              />
            ) :
            <div className={styles.noFundMessage}>
              No funds to show here
            </div>
        }
      </div>
    </section>
  )
}

export default CardSection
