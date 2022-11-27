import React from 'react';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import styles from './infoCard.module.css'

const InfoCard = ({ heading, recipient, mobile }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {heading}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentField}>
          <AccountCircleRoundedIcon />
          <p>{String(recipient).slice(0, 6)}.....{String(recipient).slice(-6)}</p>
        </div>
        {
          mobile &&
          <div className={styles.contentField}>
            <LocalPhoneRoundedIcon />
            <p>{mobile}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default InfoCard
