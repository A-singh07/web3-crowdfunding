import React from 'react';
import styles from './header.module.css';

const HeaderLight = ({ heading }) => {
  return (
    <h4 className={styles.heading}>{heading}</h4>
  )
}

export default HeaderLight
