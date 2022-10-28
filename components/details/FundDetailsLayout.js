import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import InfoCard from '../card/InfoCard';
import DonateModal from '../confirmModal/DonateModal';
import ApproveModal from '../confirmModal/ApproveModal';

import styles from './fundDetailsLayout.module.css';

const FundDetailsLayout = ({ fundDetails, isAdmin }) => {
  // TODO: isAdmin prop to be removed. Get this from AuthContext

  const [isScrolled, setIsScrolled] = useState(false);

  const [openDonate, setOpenDonate] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, []);

  // onClick function for admin (Approve now)
  const approveFund = () => {
    setOpenApprove(true)
  }

  // onClick function for user (Contribute now)
  const donateFund = () => {
    setOpenDonate(true)
  }

  return (
    <>
      <section className={styles.wrapper}>
        <h2 className={styles.fundHeading}>
          FundId: {id} {fundDetails.name}
        </h2>
        <div className={styles.mainContainer}>
          <div className={styles.leftSection}>
            <div className={styles.imageContainer}></div>
            <article className={styles.fundDetailsContainer}>
              <h4 className={styles.detailsHeading}>About</h4>
              <div className={styles.detailsContent}>
                <p>
                  {fundDetails.description}
                </p>
              </div>
            </article>
          </div>

          <div className={styles.rightSection + ` ${isScrolled ? styles.rightSectionScrolled : ''}`}>
            <CustomButton
              primary
              text={isAdmin ? 'Approve Now' : 'Contribute Now'}
              style={{ width: '100%' }}
              onClick={isAdmin ? approveFund : donateFund}
            />
            <div className={styles.deadlineContainer}>
              <p className={styles.deadlineHeading}>Deadline:</p>
              <p className={styles.deadlineDate}>{fundDetails.deadline}</p>
            </div>
            <div className={styles.daysLeft}>
              (20 Days left)
            </div>

            <div className={styles.progressContainer}>
              <Progressbar
                height={10}
                raisedAmount={fundDetails.raisedAmount}
                targetAmount={fundDetails.targetAmount}
                progress={60}
              />
              <div className={styles.progressBottom}>
                <p className={styles.supporters}>{fundDetails.supporters ? fundDetails.supporters : 0}</p>
                <p className={styles.supportersHeading}>Supporters</p>
              </div>

              <div className={styles.cardWrapper}>
                <InfoCard
                  heading={'Campaigner Info'}
                  name={fundDetails.campaignerInfo.name}
                  mobile={fundDetails.campaignerInfo.mobile}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        isAdmin ?
          <ApproveModal
            open={openApprove}
            setOpen={setOpenApprove}
            fundId={fundDetails.id}
            fundName={fundDetails.name}
          />
          : <DonateModal
            open={openDonate}
            setOpen={setOpenDonate}
            fundId={fundDetails.id}
            minAmount={fundDetails.minAmount}
            fundName={fundDetails.name}
          />
      }
    </>
  )
}

export default FundDetailsLayout
