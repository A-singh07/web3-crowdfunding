import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CustomDialog from '../customDialog/CustomDialog';

import styles from './donateModal.module.css';

const DonateModal = ({ open, setOpen, fundId, minAmount, fundName }) => {

  const [fundDetails, setFundDetails] = useState({
    fundId: fundId,
    minAmount: minAmount,
    amount: '',
  })

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const validInput = new RegExp(/^\d*\.?\d*$/);
    validInput.test(e.target.value) && setFundDetails({ ...fundDetails, amount: e.target.value })
  }

  useEffect(() => {
    !fundDetails.amount || fundDetails.amount >= minAmount && setError('')
  }, [fundDetails])

  // Request call for donation
  const donateFunc = () => {

    // TODO: Check for login status

    if (fundDetails.amount >= minAmount) {
      alert(`${fundDetails.amount} donated to fund: ${fundName}`)
      setOpen(false)
    } else {
      setError(`Entered amount should be greater than or equal to ${minAmount}`)
    }
  }

  return (
    <CustomDialog
      heading={"Enter the amount you want to contribute"}
      body={`Min. Amount: ${minAmount}`}
      open={open}
      setOpen={setOpen}
      primaryBtnClick={donateFunc}
      primaryBtnText={"Donate"}
    >
      <TextField
        className={styles.fields}
        id="amount"
        name="amount"
        label={'Amount'}
        value={fundDetails.amount}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        error={error ? true : false}
        helperText={error}
        autoFocus
      />
    </CustomDialog>
  )
}

export default DonateModal
