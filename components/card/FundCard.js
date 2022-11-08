import React from 'react';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import Chip from '@mui/material/Chip';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import styles from './fundCard.module.css';

const FundCard = ({ data, baseUrl }) => {

  const {
    id,
    category,
    status,
    heading,
    description,
    raisedAmount,
    targetAmount,
    progress,
    isCampaigner
  } = data

  // Different Chip's style for different status
  const getChipProps = (status) => {
    if (status === "In-process") {
      return {
        label: status,
        style: {
          borderColor: "#e2b93b",
          color: "#e2b93b"
        }
      }
    } else if (status === "Approved") {
      return {
        label: status,
        style: {
          borderColor: "#3aab9f",
          color: "#3aab9f"
        }
      }
    } else if (status === "Rejected") {
      return {
        label: status,
        style: {
          borderColor: "#e35e5e",
          color: "#e35e5e"
        }
      }
    } else {
      return {
        label: status,
        style: {
          borderColor: "#939ca3"
        }
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>

      </div>
      <div className={styles.cardContent}>
        <div className={styles.subContainer}>
          <p className={styles.category}>{category}</p>
          {
            isCampaigner &&
            <Chip
              variant="outlined"
              size="small"
              {...getChipProps(status)}
            />
          }
        </div>
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
          link={baseUrl + `/${id}`}
          style={{ width: '100%', padding: '0.75rem 1.5rem' }}
        />
      </div>
    </div>
  )
}

export default FundCard
