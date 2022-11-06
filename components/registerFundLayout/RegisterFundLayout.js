import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { RegisterFundContext } from '../../context/RegisterFundContext';

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

  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [editFundData, setEditFundData] = useState({})

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

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    scrollToTop();
  }

  const handleBack = () => {
    setActiveStep((step) => step - 1)
    scrollToTop();
  }

  useEffect(() => {
    router.query.id && setEditFundData(router.query);
  }, [router])

  return (
    <RegisterFundContext.Provider value={{ setEditFundData, editFundData }}>
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
                style={{
                  padding: '0.75rem 1.5rem',
                  marginLeft: 'auto'
                }}
                onClick={activeStep < (steps.length - 1) ? handleComplete : () => { }}
              />
            </div>
          </div>

        </div>
      </section>
    </RegisterFundContext.Provider>
  )
}

export default RegisterFundLayout
