import React from 'react';
import FundCard from '../card/FundCard';
import styles from './cardSection.module.css';

const CardSection = ({ heading }) => {

  const cardData = [
    {
      category: "Medical",
      heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `25000`,
      targetAmount: `100000`,
      progress: '25'
    },
    {
      category: "Charity",
      heading: "cajnsjc na soci charity servie cporicna s o",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `10000`,
      targetAmount: `50000`,
      progress: '20'
    },
    {
      category: "Medical",
      heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `25000`,
      targetAmount: `100000`,
      progress: '25'
    },
    {
      category: "Medical",
      heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `25000`,
      targetAmount: `100000`,
      progress: '25'
    },
    {
      category: "Medical",
      heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `25000`,
      targetAmount: `100000`,
      progress: '25'
    },
    {
      category: "Medical",
      heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
      description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
      raisedAmount: `25000`,
      targetAmount: `100000`,
      progress: '25'
    }
  ]

  return (
    <section className={styles.wrapper}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.cardContainer}>
        {
          cardData && cardData.map((data, i) =>
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
