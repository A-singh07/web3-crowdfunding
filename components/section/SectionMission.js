import React from 'react';
import Image from 'next/image';
import styles from './sectionMission.module.css';

const SectionMission = ({ data }) => {
  const { heading, missions } = data;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <div className={styles.bodyContainer}>
        {
          missions.map((card, i) =>
            <div className={styles.cardContainer} key={i}>
              <div className={styles.cardImg}>
                <Image src={card.image} />
              </div>
              <p className={styles.cardHeading}>{card.heading}</p>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default SectionMission
