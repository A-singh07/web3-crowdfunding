import React from 'react';
import HeadingLight from '../header/HeaderLight';
import FundCard from '../card/FundCard';
import CustomCarousel from '../customCarousel/CustomCarousel';
import styles from './cardSection.module.css';

const CardSection = ({ heading, fundsData, baseUrl, showAll, autoplay, style }) => {

  return (
    <section className={styles.wrapper} style={style}>
      <HeadingLight heading={heading} />
      {
        fundsData.length !== 0 ?
          showAll ?
            <div className={styles.cardContainer}>
              {
                fundsData.map((data, i) =>
                  <FundCard
                    key={i}
                    data={data}
                    baseUrl={baseUrl}
                    isCampaigner
                  />
                )
              }
            </div> :
            <CustomCarousel
              data={fundsData}
              Component={FundCard}
              baseUrl={baseUrl}
              autoplay={autoplay}
            /> :
          <div className={styles.noFundMessage}>
            No funds to show here
          </div>
      }
    </section>
  )
}

export default CardSection
