import React from 'react';
import HeadingLight from '../header/HeaderLight';
import FundCard from '../card/FundCard';
import styles from './cardSection.module.css';

const CardSection = ({ heading, fundsData, baseUrl, showAll, style }) => {

  return (
    <section className={styles.wrapper} style={style}>
      <HeadingLight heading={heading} />
      <div className={styles.cardContainer + ` ${showAll && styles.cardContainerShowAll}`}>
        {
          fundsData && fundsData.length !== 0 ?
            fundsData.map((data, i) =>
              !showAll ?
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
                  baseUrl={baseUrl}
                /> :
                <FundCard
                  key={data.id}
                  id={data.id}
                  category={data.category}
                  status={data.status}
                  heading={data.heading}
                  description={data.description}
                  raisedAmount={data.raisedAmount}
                  targetAmount={data.targetAmount}
                  progress={data.progress}
                  baseUrl={baseUrl}
                  isCampaigner
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
