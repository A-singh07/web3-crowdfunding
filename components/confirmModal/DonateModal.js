import { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import CustomDialog from '../customDialog/CustomDialog';
import { Web3Context } from '../../context/Web3Context';

import styles from './donateModal.module.css';

const DonateModal = ({ open, setOpen, fundId, minAmount, targetAmount, fundName }) => {

  const { donate } = useContext(Web3Context);

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

    if ((fundDetails.amount >= minAmount) && (fundDetails.amount <= targetAmount)) {
      donate(fundId, Number(fundDetails.amount))
        .then(res => {
          alert(`${fundDetails.amount} Wei donated successfully!`)
          setOpen(false)
          location.reload()
        })
    } else {
      setError(`Entered amount should be between ${minAmount} and ${targetAmount}`)
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
