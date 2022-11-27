import React, { useEffect, useState } from 'react';
import styles from './progressbar.module.css';

const Progressbar = ({ height, raisedAmount, targetAmount, progress }) => {

  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3
  })

  const [calcProgress, setCalcProgress] = useState(0)

  useEffect(() => {
    setCalcProgress(raisedAmount / targetAmount * 100)
  }, [raisedAmount, targetAmount])


  // useEffect(() => {
  //   console.log("RAISED:", currencyFormatter.format(raisedAmount))
  //   console.log(
  //     currencyFormatter.format(raisedAmount) / currencyFormatter.format(targetAmount)
  //   )
  //   console.log((parseInt(raisedAmount) / parseInt(targetAmount)) * 100)

  // }, [raisedAmount, targetAmount])

  return (
    <>
      <div className={styles.details}>
        <div className={styles.subDetails}>
          <p className={styles.detailsHeading}>Raised:</p>
          <p className={styles.detailsAmount}>{raisedAmount}</p>
          {/* <p className={styles.detailsAmount}>{currencyFormatter.format(raisedAmount)}</p> */}
        </div>
        <div className={styles.subDetails}>
          <p className={styles.detailsHeading}>Target:</p>
          <p className={styles.detailsAmount}>{targetAmount}&nbsp;<span className={styles.detailsHeading}>Wei</span></p>
          {/* <p className={styles.detailsAmount}>{currencyFormatter.format(targetAmount)}</p> */}
        </div>
      </div>
      <div className={styles.progressBarContainer} style={{ height: `${height ? height : 8}px` }}>
        <div className={styles.progress} style={{ width: `${calcProgress}%` }}></div>
      </div>
    </>
  )
}

export default Progressbar
