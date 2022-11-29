import React from 'react';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import Chip from '@mui/material/Chip';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import styles from './fundCard.module.css';

const FundCard = ({ data, baseUrl, isCampaigner }) => {

  const {
    fundId,
    category,
    Admin_status,
    // heading,
    description, // fund name
    raiseAmount,
    target,
  } = data;

  const fundDesc = "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav"

  // Different Chip's style for different status
  const getChipProps = (status) => {
    if (status === "In Progress") {
      return {
        label: "In Process",
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
          {/* <p className={styles.category}>{category}</p> */}
          {
            isCampaigner &&
            <Chip
              variant="outlined"
              size="small"
              {...getChipProps(Admin_status)}
            />
          }
        </div>
        <p className={styles.cardHeading}>{description}</p>
        <p className={styles.cardDesc}>{fundDesc}</p>
        <Progressbar
          height={8}
          raisedAmount={raiseAmount}
          targetAmount={target}
        />
        <CustomButton
          text={'View More'}
          link={baseUrl + `/${fundId}`}
          style={{ width: '100%', padding: '0.75rem 1.5rem' }}
        />
      </div>
    </div>
  )
}

export default FundCard
