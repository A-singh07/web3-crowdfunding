import React from 'react';
import Image from 'next/image';
import styles from './herosection.module.css';

const HerosectionAbout = ({ data }) => {

  const { heading, body, image } = data;

  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionLeftSmall}>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.aboutImageContainer}>
        <Image src={image ? image : ''} />
      </div>
    </section>
  )
}

export default HerosectionAbout
