import React from 'react';
import Image from 'next/image';
import CustomButton from '../customButton/CustomButton';
import mainSvg from '../../assets/image/MainIllustration.svg'
import styles from './herosection.module.css';

const Herosection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionLeft}>
        <h1>Let’s help those who are more in need</h1>
        <CustomButton text={'Explore More'} />
      </div>
      <div className={styles.imageContainer}>
        <Image src={mainSvg} />
        {/* <img src={mainSvg.src} alt="" /> */}
      </div>
    </section>
  )
}

export default Herosection
