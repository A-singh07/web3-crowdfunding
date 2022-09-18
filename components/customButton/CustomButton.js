import React from 'react';
import { useRouter } from 'next/router'
// import Button from '@mui/material/Button'
import styles from './customButton.module.css';

// Button type: Primary & Secondary(outline)
// Passs width:100% in style as prop for FullWidth button

const CustomButton = ({ text, primary, secondary, style, link }) => {

  const router = useRouter()

  const handleClick = () => {
    link && router.push(link)
  }

  return (
    <button
      className={styles.buttonWrapper +
        ` ${secondary ? styles.secondaryBtn : styles.primaryBtn}`}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
}

export default CustomButton
