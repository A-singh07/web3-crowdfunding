import React from 'react';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import styles from './fundCard.module.css';

const FundCard = ({
  id,
  category,
  heading,
  description,
  raisedAmount,
  targetAmount,
  progress,
  baseUrl
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>

      </div>
      <div className={styles.cardContent}>
        <p className={styles.category}>{category}</p>
        <p className={styles.cardHeading}>FundID: {id} {heading}</p>
        <p className={styles.cardDesc}>{description}</p>
        <Progressbar
          height={8}
          raisedAmount={raisedAmount}
          targetAmount={targetAmount}
          progress={progress}
        />
        <CustomButton
          text={'View More'}
          link={baseUrl + `${id}`}
          style={{ width: '100%', padding: '0.75rem 1.5rem' }}
        />
      </div>
    </div>
  )
}

export default FundCard
