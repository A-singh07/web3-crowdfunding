import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            LOGO
          </div>
          <div className={styles.socialContainer}>
            <div className={styles.social}></div>
            <div className={styles.social}></div>
            <div className={styles.social}></div>
            <div className={styles.social}></div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.listContainer}>
            <h4>Navigate</h4>
            <p>About</p>
            <p>All Funds</p>
            <p>Start a Fund</p>
          </div>
          <div className={styles.listContainer}>
            <h4>Navigate</h4>
            <p>About</p>
            <p>All Funds</p>
            <p>Start a Fund</p>
          </div>
        </div>
        <div className={styles.address}>
          <h4>Address:</h4>
          <p>
            CrowdFunding pvt. ltd. <br />
            S/12, A-block, <br />
            Delhi-110016
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
