import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import InfoCard from '../card/InfoCard';
import DonateModal from '../confirmModal/DonateModal';
import ApproveModal from '../confirmModal/ApproveModal';
import CustomMenu from '../customMenu/CustomMenu';

import { AuthContext } from '../../context/AllContext';

import styles from './fundDetailsLayout.module.css';

const FundDetailsLayout = ({ fundDetails, isAdmin, isCampaigner }) => {
  // TODO: remove isAdmin prop, get this from authContext

  // const { authUser } = useContext(AuthContext)

  const [isScrolled, setIsScrolled] = useState(false);

  const [openDonate, setOpenDonate] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [approveType, setApproveType] = useState(''); // 'approve', 'reqEdit', 'reject'

  const router = useRouter()
  const { id } = router.query

  // TODO: Fetch fund details based on id

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, []);


  // Action menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // Approve now modal (for admin)
  const approveFund = () => {
    setOpenApprove(true);
    setApproveType('Approve');
  }

  const requestEdit = () => {
    setOpenApprove(true);
    setApproveType('Request Edit');
  }

  const rejectFund = () => {
    setOpenApprove(true)
    setApproveType('Reject');
  }

  // Action Menu
  const menuItems = [
    {
      name: 'Approve',
      itemOnClick: approveFund
    },
    {
      name: 'Request edit',
      itemOnClick: requestEdit
    },
    {
      name: 'Reject',
      itemOnClick: rejectFund
    }
  ];


  // Contribute now (for Gen. User)
  const donateFund = () => {
    setOpenDonate(true)
  }

  // Edit fund (for Campaigner)
  const editFund = () => {
    router.push({
      pathname: '/registerfund',
      query: fundDetails,
    }, '/registerfund');
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
              text={isAdmin ? 'Take Action' : isCampaigner ? 'Edit Fund' : 'Contribute Now'}
              style={{ width: '100%' }}
              onClick={isAdmin ? handleOpenMenu : isCampaigner ? editFund : donateFund}
            />
            <div className={styles.deadlineContainer}>
              <p className={styles.deadlineHeading}>Deadline:</p>
              <p className={styles.deadlineDate}>{fundDetails.deadline}</p>
            </div>
            <div className={styles.daysLeft}>
              (20 Days left)
            </div>

            <div className={styles.progressContainer}>
              {
                !isAdmin &&
                <>
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
                </>
              }
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
            approveType={approveType}
          />
          : <DonateModal
            open={openDonate}
            setOpen={setOpenDonate}
            fundId={fundDetails.id}
            minAmount={fundDetails.minAmount}
            fundName={fundDetails.name}
          />
      }
      {
        openMenu &&
        <CustomMenu
          open={openMenu}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuItems={menuItems}
        />
      }
    </>
  )
}

export default FundDetailsLayout
