import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { RegisterFundContext, AuthContext } from '../../context/AllContext';
import { Web3Context } from '../../context/Web3Context'

import CustomButton from '../customButton/CustomButton';
import FundDetailsForm from './FundDetailsForm';
import UploadDocumentsForm from './UploadDocumentsForm';
import LinkWallet from './LinkWallet';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'

import styles from './registerFundLayout.module.css';

const steps = [
  "Fund Details",
  "Upload Document",
  "Link Wallet"
];

const RegisterFundLayout = () => {

  const { setLoginModalOpen, authUser } = useContext(AuthContext);
  const { createFunding, walletAddress } = useContext(Web3Context);
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [editFundData, setEditFundData] = useState({})

  const [isFormFilled, setIsFormFilled] = useState(false)

  const [formData, setFormData] = useState({
    fundName: '',
    category: '',
    description: '',
    targetAmount: '',
    minContribution: '',
    deadline: '',
    rcpAddr: walletAddress,
    document: []
  })

  // To check wheather all the fields are filled or not
  useEffect(() => {
    formData.name !== '' &&
      formData.category !== '' &&
      formData.description !== '' &&
      formData.targetAmount !== '' &&
      formData.minContribution !== '' &&
      formData.deadline !== '' ? setIsFormFilled(true) : setIsFormFilled(false);
  }, [formData])

  // Date to seconds
  const convertDate = (date) => {
    const dt = new Date(date);
    const seconds = dt.getTime() / 1000;
    return seconds;
  }

  // Make this a custom hook
  const scrollToTop = () => {
    typeof window !== "undefined" &&
      window.scrollTo(0, 0)
  }

  const handleStep = (step) => () => {
    setActiveStep(step);
  }

  const handleNext = () => {
    setActiveStep((step) => step + 1)
  }

  const handleBack = () => {
    setActiveStep((step) => step - 1)
    scrollToTop();
  }

  const handleComplete = () => {
    // Allow only logged in user to proceed
    if (!authUser.isLogIn) {
      setLoginModalOpen(true)
      return
    }

    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    scrollToTop();
  }

  const createCrowdFunding = () => {
    if (!authUser.isLogIn) return

    const data = {
      ...formData,
      deadline: convertDate(formData.deadline)
    }
    createFunding(data)
      .then(res => {
        alert("Your crowdfunding has been submitted!")
        router.push('/user/funds')
      })
  }

  useEffect(() => {
    router.query.id && setEditFundData(router.query);
  }, [router])


  // Check if user is not logged in. Open Login Modal
  useEffect(() => {
    !authUser.isLogIn ?
      setLoginModalOpen(true)
      : setLoginModalOpen(false)
  }, [authUser])

  return (
    <RegisterFundContext.Provider value={{ setFormData, formData, setEditFundData, editFundData }}>
      <section>
        <div className={styles.container}>
          <Stepper nonLinear alternativeLabel activeStep={activeStep}>
            {
              steps.map((label, index) => (
                <Step key={label} completed={completed[index]} className={styles.step}>
                  <StepLabel className={styles.stepLabel} onClick={handleStep(index)}>
                    {label}
                  </StepLabel>
                </Step>
              ))
            }
          </Stepper>
          <div className={styles.stepsForm}>
            {
              activeStep == 0
                ? <FundDetailsForm />
                : activeStep == 1
                  ? <UploadDocumentsForm />
                  : <LinkWallet />

            }
            <div className={styles.buttonContainer}>
              {
                activeStep > 0 &&
                <CustomButton
                  text={"Back"}
                  secondary
                  style={{
                    padding: '0.75rem 1.5rem',
                  }}
                  onClick={handleBack}
                />
              }
              <CustomButton
                text={activeStep === (steps.length - 1) ? "Submit" : "Next"}
                primary
                disableBtn={!isFormFilled ? true : false}
                style={{
                  padding: '0.75rem 1.5rem',
                  marginLeft: 'auto'
                }}
                onClick={activeStep < (steps.length - 1) ? handleComplete : createCrowdFunding}
              />
            </div>
          </div>
        </div>
      </section>
    </RegisterFundContext.Provider>
  )
}

export default RegisterFundLayout
