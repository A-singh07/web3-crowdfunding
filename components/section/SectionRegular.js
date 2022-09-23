import React from 'react';
import Image from 'next/image';

import styles from './sectionRegular.module.css';

const SectionRegular = ({ data }) => {

  const { heading, content, image } = data

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.sectionHeading}>{heading}</h3>
      <div className={styles.bodyContainer}>
        <div className={styles.imageContainer}>
          <Image src={image ? image : ''} />
        </div>
        <div className={styles.contentContainer}>
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionRegular
