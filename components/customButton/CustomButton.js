import React from 'react';
import Button from '@mui/material/Button'
import styles from './customButton.module.css';

// Button type: Primary & Secondary(outline)
// Passs width:100% in style as prop for FullWidth button

const CustomButton = ({ text, primary, secondary, style }) => {

  return (
    <button
      className={styles.buttonWrapper +
        ` ${secondary ? styles.secondaryBtn : styles.primaryBtn}`}
      style={style}
    >
      {text}
    </button>
  );
}

export default CustomButton
