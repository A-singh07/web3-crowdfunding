import React from 'react';
import styles from './header.module.css';

const Header = ({ heading }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={'mainLayout ' + styles.heading}>{heading}</h3>
    </div>
  )
}

export default Header
