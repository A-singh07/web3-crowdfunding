import React from 'react';
import Image from 'next/image';

import CustomButton from '../customButton/CustomButton';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import styles from './themeSection.module.css';

const ThemeSection = ({ data }) => {

  const { heading, body, btnText, btnLink, image, order } = data
  // If Order == 0 ==> Image in Right;

  return (
    <section className={styles.wrapper}>
      <div className={styles.themeContainer}>
        <div className={styles.sectionContent} style={{ order: order === 0 || 1 ? order : 0 }}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.body}>{body}</p>
          <CustomButton
            primary
            text={btnText}
            link={btnLink}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image src={image} />
        </div>
      </div>
    </section>
  )
}

export default ThemeSection
