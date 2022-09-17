import { useEffect, useState } from 'react';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import InfoCard from '../card/InfoCard';
import styles from './fundDetailsLayout.module.css';

const FundDetails = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, [])

  return (
    <>
      <section className={styles.wrapper}>
        <h2 className={styles.fundHeading}>
          Fundraiser for Medical Support
        </h2>
        <div className={styles.mainContainer}>
          <div className={styles.leftSection}>
            <div className={styles.imageContainer}></div>
            <article className={styles.fundDetailsContainer}>
              <h4 className={styles.detailsHeading}>About</h4>
              <div className={styles.detailsContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
                  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
                  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
                  diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
                  Curabitur elementum diam at libero vulputate, at
                </p>
              </div>
            </article>
          </div>

          <div className={styles.rightSection + ` ${isScrolled ? styles.rightSectionScrolled : ''}`}>
            <CustomButton
              primary
              text={'Contribute Now'}
              style={{ width: '100%' }}
            />
            <div className={styles.deadlineContainer}>
              <p className={styles.deadlineHeading}>Deadline:</p>
              <p className={styles.deadlineDate}>10th October 2022</p>
            </div>
            <div className={styles.daysLeft}>
              (20 Days left)
            </div>

            <div className={styles.progressContainer}>
              <Progressbar
                height={10}
                raisedAmount={20000}
                targetAmount={100000}
                progress={20}
              />
              <div className={styles.progressBottom}>
                <p className={styles.supporters}>6,90,0012</p>
                <p className={styles.supportersHeading}>Supporters</p>
              </div>

              <div className={styles.cardWrapper}>
                <InfoCard
                  heading={'Campaigner Info'}
                  name={'Ankush Patra'}
                  mobile={'+919012343459'}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FundDetails
