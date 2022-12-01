import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CustomButton from '../customButton/CustomButton';
import Progressbar from '../progressbar/Progressbar';
import InfoCard from '../card/InfoCard';
import DonateModal from '../confirmModal/DonateModal';
import ApproveModal from '../confirmModal/ApproveModal';
import CustomMenu from '../customMenu/CustomMenu';
import moment from 'moment';
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

const FundDetailsLayout = ({ fundDetails, getDetailsCall }) => {

  const { authUser, setLoginModalOpen } = useContext(AuthContext)
  const { voteToRefund, transferAmount, getRefundAmount, checkContributor } = useContext(Web3Context)

  // Total 3 Types of user: Admin, Campaigner and Donor
  const [fundState, setFundState] = useState({
    isAdmin: false,
    isCampaigner: false,
    isDonor: 0
  })
  useEffect(() => {
    authUser && fundDetails &&
      setFundState({
        isAdmin: authUser.isAdmin,
        isCampaigner: authUser.address === fundDetails.receipent,
      })

    // console.log("DETAILS", fundDetails)
  }, [authUser, fundDetails])

  useEffect(() => {
    fundDetails &&
      !(authUser.isAdmin || authUser.address === fundDetails.receipent) &&
      checkContributor(fundDetails.fundId)
        .then(res => {
          setFundState({
            ...fundState,
            isDonor: res
          })
        })
        .catch(err => { console.log("not donor", err) })
  }, [fundDetails])

  const [isScrolled, setIsScrolled] = useState(false);

  const [openDonate, setOpenDonate] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [approveType, setApproveType] = useState(''); // 'approve', 'reqEdit', 'reject'

  const router = useRouter();

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


  // Contribute now (for Gen. User)
  const donateFund = () => {
    if (!authUser.isLogIn) return setLoginModalOpen(true)

    if (fundDetails.raiseAmount < fundDetails.target) return setOpenDonate(true)

    alert("Target amount reached!")
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
      .catch(err => alert("You can't vote!"))
  }

  // Transfer amount to campaigner (Admin only)
  const transferNow = () => {
    transferAmount(fundDetails.fundId).then(() => {
      getDetailsCall();
    })
  }

  // Get refund amount
  const getRefund = () => {
    getRefundAmount(fundDetails.fundId).then(() => {
      getDetailsCall()
    })
  }

  // ------ Handling main button state ------ //
  const [buttonState, setButtonState] = useState({
    text: '',
    onClick: () => { },
    disable: false,
    secondary: false,
    errorBtn: false,
    helperText: ''
  })

  const handleButtonState = () => {
    return (
      fundDetails.fundClosed ?
        ( // ---- When voting happened before fund is closed. ---- //
          fundDetails.Voting_Enabled ?
            (
              // --- Contributor && Voter --- //
              fundState.isDonor > 0 ?
                setButtonState({
                  text: "Collect fund",
                  onClick: getRefund,
                  disable: false,
                  secondary: true,
                  errorBtn: false,
                  helperText: "Voting phase for this fund is over!"
                })
                : setButtonState({
                  text: "Fund has been closed",
                  onClick: () => { },
                  disable: true,
                  secondary: false,
                  errorBtn: true,
                  helperText: "Voting phase for this fund is over!"
                })
            )
            // ---- Fund closed without voting (Target reached)----- //
            : setButtonState({
              text: "Fund has been closed",
              onClick: () => { },
              disable: true,
              secondary: false,
              errorBtn: true,
            })
        )
        : fundDetails.Admin_status === "Approved" ?
          (
            // --- Voting phase states --- //
            fundDetails.Voting_Enabled ?
              (
                moment.unix(fundDetails.Voting_Deadline) < moment() ?
                  (
                    fundState.isAdmin ?
                      setButtonState({
                        text: "Transfer Amount",
                        onClick: transferNow,
                        disable: false,
                        secondary: false,
                        errorBtn: false,
                        helperText: "Voting phase over!"
                      })
                      : setButtonState({
                        text: "Voting phase over!",
                        onClick: () => { },
                        disable: true,
                        secondary: true,
                        errorBtn: false,
                        helperText: "Voting phase over for this fundraiser, waiting for admin's response"
                      })
                  )
                  // --- Only donor can vote
                  : fundState.isDonor > 0 ?
                    setButtonState({
                      text: "Get a refund",
                      onClick: voteNow,
                      disable: false,
                      secondary: false,
                      errorBtn: false,
                      helperText: "Fund could not reach atleast 50% of the target amount within deadline. You can opt to get a refund."
                    })
                    : setButtonState({
                      text: "Voting phase",
                      onClick: () => { },
                      disable: true,
                      secondary: true,
                      errorBtn: false
                    })
              )
              : moment.unix(fundDetails.deadline) < moment() ?
                (
                  fundState.isCampaigner ? setButtonState({
                    text: "Waiting for Admin",
                    onClick: () => { },
                    disable: true,
                    secondary: true,
                    errorBtn: false,
                    helperText: `Wait for admin to ${(fundDetails.raiseAmount / fundDetails.target) < 0.5 ? "start voting" : "transfer raised amount"}`
                  })
                    : fundState.isAdmin ? setButtonState({
                      text: "Transfer Amount",
                      onClick: transferNow,
                      disable: false,
                      secondary: false,
                      errorBtn: false
                    })
                      : setButtonState({
                        text: "Donation not allowed",
                        onClick: () => { },
                        disable: true,
                        secondary: true,
                        errorBtn: false,
                        helperText: "No more donation allowed after deadline!"
                      })
                )
                : fundState.isCampaigner || fundState.isAdmin ?
                  setButtonState({
                    text: "Fund already approved",
                    onClick: () => { },
                    disable: true,
                    secondary: true,
                    errorBtn: false
                  })
                  : setButtonState({
                    text: "Contribute Now",
                    onClick: donateFund,
                    disable: false,
                    secondary: false,
                    errorBtn: false
                  })
          )
          : fundDetails.Admin_status === "In Progress" ?
            (
              fundState.isCampaigner ?
                setButtonState({
                  text: "Edit Fund",
                  onClick: editFund,
                  disable: false,
                  secondary: false,
                  errorBtn: false
                })
                : fundState.isAdmin ?
                  setButtonState({
                    text: "Waiting for response",
                    onClick: () => { },
                    disable: true,
                    secondary: true,
                    errorBtn: false
                  })
                  : setButtonState({
                    text: "Un approved fund",
                    onClick: () => { },
                    disable: true,
                    secondary: true,
                    errorBtn: false
                  })
            )
            : fundDetails.Admin_status === "Rejected" ?
              (
                fundState.isCampaigner || fundState.isAdmin ?
                  setButtonState({
                    text: "Fund has been rejected!",
                    onClick: () => { },
                    disable: true,
                    secondary: false,
                    errorBtn: true
                  })
                  : setButtonState({
                    text: "Rejected fund",
                    onClick: () => { },
                    disable: true,
                    secondary: false,
                    errorBtn: true
                  })
              ) :
              ( // ---- For Fund state = Pending state ---- //
                fundState.isCampaigner ?
                  setButtonState({
                    text: "Waiting for Admin's response",
                    onClick: () => { },
                    disable: true,
                    secondary: true,
                    errorBtn: false
                  })
                  : fundState.isAdmin ?
                    setButtonState({
                      text: "Take Action",
                      onClick: handleOpenMenu,
                      disable: false,
                      secondary: false,
                      errorBtn: false
                    })
                    : setButtonState({
                      text: "Fund in process",
                      onClick: () => { },
                      disable: true,
                      secondary: true,
                      errorBtn: false
                    })
              )
    )
  }

  useEffect(() => {
    fundDetails && fundState &&
      handleButtonState();
  }, [fundDetails, fundState])


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, []);


  useEffect(() => {
    getDetailsCall && getDetailsCall();
  }, [openDonate, openApprove])


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
                    secondary={buttonState.secondary}
                    errorBtn={buttonState.errorBtn}
                    text={buttonState.text}
                    style={{ width: '100%' }}
                    onClick={buttonState.onClick}
                    disableBtn={buttonState.disable}
                  />
                  {
                    buttonState.helperText &&
                    <p className={styles.fundStatus}>
                      {buttonState.helperText}
                    </p>
                  }
                  <div className={styles.deadlineContainer}>
                    <p className={styles.deadlineHeading}>Deadline:</p>
                    <p className={styles.deadlineDate}>
                      {moment.unix(fundDetails.deadline).format("DD-MM-YYYY || HH:mm a")}
                    </p>
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
