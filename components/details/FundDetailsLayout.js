import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import InfoCard from '../card/InfoCard';
import DonateModal from '../confirmModal/DonateModal';
import ApproveModal from '../confirmModal/ApproveModal';
import CustomMenu from '../customMenu/CustomMenu';
import { AuthContext } from '../../context/AllContext';
import { Web3Context } from '../../context/Web3Context'

import styles from './fundDetailsLayout.module.css';

const FundDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at`;

const FundDetailsLayout = ({ fundDetails }) => {

  const { authUser, setLoginModalOpen } = useContext(AuthContext)
  const { voteToRefund } = useContext(Web3Context)

  const [fundState, setFundState] = useState({
    isAdmin: false,
    isCampaigner: false
  })
  useEffect(() => {
    authUser && fundDetails &&
      setFundState({
        isAdmin: authUser.isAdmin,
        isCampaigner: authUser.address === fundDetails.receipent
      })

    console.log("DETAILS", fundDetails)
  }, [authUser, fundDetails])

  const [isScrolled, setIsScrolled] = useState(false);

  const [openDonate, setOpenDonate] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [approveType, setApproveType] = useState(''); // 'approve', 'reqEdit', 'reject'

  const router = useRouter();

  // // TODO: Fetch fund details based on id

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
    authUser.isLogIn ?
      setOpenDonate(true)
      : setLoginModalOpen(true)
  }

  // Edit fund (for Campaigner)
  const editFund = () => {
    if (fundDetails.Admin_status === "Approved")
      return alert("Fund cannot be edited!")

    router.push({
      pathname: '/registerfund',
      query: fundDetails
    }, '/registerfund');
  }

  // To vote out a contributor during voting phase
  const voteNow = () => {
    voteToRefund(fundDetails.fundId)
      .then(res => {
        alert("Your vote has been submitted!")
      })
  }

  return (
    <>
      <section className={styles.wrapper}>
        {
          !fundDetails ?
            <h2 className={styles.fundHeading}>Loading data...</h2> :
            <>
              <h2 className={styles.fundHeading}>
                {fundDetails.description} {/* Fund Name */}
              </h2>
              <div className={styles.mainContainer}>
                <div className={styles.leftSection}>
                  <div className={styles.imageContainer}></div>
                  <article className={styles.fundDetailsContainer}>
                    <h4 className={styles.detailsHeading}>About</h4>
                    <div className={styles.detailsContent}>
                      <p>
                        {FundDesc}
                      </p>
                    </div>
                  </article>
                </div>

                <div className={styles.rightSection + ` ${isScrolled ? styles.rightSectionScrolled : ''}`}>
                  <CustomButton
                    secondary={fundState.isCampaigner && (fundDetails.Admin_status === "Approved" || fundDetails.Admin_status === "Pending")}
                    errorBtn={fundDetails.Voting_Enabled}
                    text={
                      fundDetails.fundClosed ? "Fund has been closed"
                        : fundState.isAdmin ? 'Take Action' :
                          fundState.isCampaigner ? fundDetails.Admin_status === "Approved" ? "Fund already approved"
                            : fundDetails.Admin_status === "In Progress" ? 'Edit Fund' : "Waiting for Admin's response"
                            : fundDetails.Voting_Enabled ? "Get a refund"
                              : 'Contribute Now'
                    }
                    style={{ width: '100%' }}
                    onClick={
                      fundState.isAdmin ? handleOpenMenu
                        : fundState.isCampaigner ? editFund
                          : fundDetails.Voting_Enabled ? voteNow
                            : donateFund
                    }
                    disableBtn={
                      (fundState.isCampaigner && (fundDetails.Admin_status === "Approved" || fundDetails.Admin_status === "Pending"))
                      || (fundState.isAdmin && fundDetails.Admin_status === "Rejected")
                      || fundDetails.fundClosed
                    }
                  />
                  {
                    !fundState.isAdmin && fundDetails.Voting_Enabled &&
                    (
                      !fundDetails.fundClosed ?
                        <p className={styles.fundStatus}>
                          Fund could not reach atleast 50% of the target amount within deadline. <br />
                          You can opt to get a refund.
                        </p>
                        : <p className={styles.fundStatus}>
                          Voting phase for this fund is over!
                        </p>
                    )
                  }
                  <div className={styles.deadlineContainer}>
                    <p className={styles.deadlineHeading}>Deadline:</p>
                    <p className={styles.deadlineDate}>{fundDetails.deadline}</p>
                  </div>

                  <div className={styles.progressContainer}>
                    {
                      fundDetails.Admin_status === 'Approved' &&
                      <>
                        <Progressbar
                          height={10}
                          raisedAmount={fundDetails.raiseAmount}
                          targetAmount={fundDetails.target}
                          progress={60}
                        />
                        <div className={styles.progressBottom}>
                          <p className={styles.supporters}>{fundDetails.noOfContributors ? fundDetails.noOfContributors : 0}</p>
                          <p className={styles.supportersHeading}>Supporter(s)</p>
                        </div>
                      </>
                    }
                    <div className={styles.cardWrapper}>
                      <InfoCard
                        heading={'Recipient Address'}
                        recipient={fundDetails.receipent}
                      // mobile={fundDetails.campaignerInfo.mobile}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
        }
      </section>
      {
        fundDetails &&
        <>
          {
            fundState.isAdmin ?
              <ApproveModal
                open={openApprove}
                setOpen={setOpenApprove}
                fundId={fundDetails.fundId}
                fundName={fundDetails.description}
                approveType={approveType}
              />
              : <DonateModal
                open={openDonate}
                setOpen={setOpenDonate}
                fundId={fundDetails.fundId}
                minAmount={Number(fundDetails.minContribution)}
                targetAmount={Number(fundDetails.target)}
                fundName={fundDetails.description}
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
      }
    </>
  )
}

export default FundDetailsLayout
