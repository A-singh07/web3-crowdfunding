import React from 'react';
import { useRouter } from 'next/router'
// import Button from '@mui/material/Button'
import styles from './customButton.module.css';

// Button type: Primary & Secondary(outline)
// Passs width:100% in style as prop for FullWidth button

const CustomButton = ({
  text,
  primary,
  secondary,
  errorBtn,
  style,
  leftIcon,
  rightIcon,
  link,
  onClick,
  type
}) => {

  const router = useRouter()

  const handleClick = () => {
    link
      ? router.push(link)
      : onClick && onClick()
  }

  return (
    <button
      className={styles.buttonWrapper +
        ` ${secondary ? styles.secondaryBtn : errorBtn ? styles.errorBtn : styles.primaryBtn}`}
      onClick={handleClick}
      style={style}
      type={type ? type : 'button'}
    >
      {
        leftIcon &&
        <div className={styles.iconContainer}>{leftIcon}</div>
      }
      <p className={styles.text}>{text}</p>
      {
        rightIcon &&
        <div className={styles.iconContainer}>{rightIcon}</div>
      }
    </button>
  );
}

export default CustomButton
