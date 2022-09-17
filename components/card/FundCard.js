import React from 'react';
import CustomButtom from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import styles from './fundCard.module.css';

const FundCard = ({ category, heading, description, raisedAmount, targetAmount, progress }) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>

      </div>
      <div className={styles.cardContent}>
        <p className={styles.category}>{category}</p>
        <p className={styles.cardHeading}>{heading}</p>
        <p className={styles.cardDesc}>{description}</p>
        <Progressbar
          height={8}
          raisedAmount={raisedAmount}
          targetAmount={targetAmount}
          progress={progress}
        />
        <CustomButtom
          text={'Explore More'}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}

export default FundCard
