import React from 'react';
import CustomButtom from '../customButton/CustomButton';
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
  progress
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
        <CustomButtom
          text={'View More'}
          link={`/funds/${id}`}
          style={{ width: '100%', padding: '0.75rem 1.5rem' }}
          rightIcon={<ArrowForwardIosRoundedIcon />}
        />
      </div>
    </div>
  )
}

export default FundCard
