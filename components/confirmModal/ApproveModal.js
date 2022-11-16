import { useState } from 'react';
import TextField from '@mui/material/TextField';
import CustomDialog from '../customDialog/CustomDialog';

import styles from './donateModal.module.css';

const ApproveModal = ({ open, setOpen, fundId, fundName, approveType }) => {

  const [fundDetails, setFundDetails] = useState({
    fundId: fundId,
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    fundDetails.message !== '' && setError('')

    setFundDetails({
      ...fundDetails,
      message: e.target.value
    })
  }

  // Request call to approve fund
  const approveFund = () => {

    // TODO: Check for login status
    alert(`"${fundName}" is approved`)
    setOpen(false)
  }

  const requestEdit = () => {
    // TODO: Check for login status
    if (fundDetails.message) {
      alert(`"${fundName}" is in process now`)
      setOpen(false)
    } else {
      setError("Enter a message!");
    }
  }

  // Request call to approve fund
  const rejectFund = () => {
    // TODO: Check for login status

    if (fundDetails.message) {
      alert(`"${fundName}" is rejected`)
      setOpen(false)
    } else {
      setError("Reject with a message!");
    }
  }

  return (
    <CustomDialog
      heading={"Are you sure?"}
      body={`Fund: ${fundName}`}
      open={open}
      setOpen={setOpen}
      primaryBtnClick={
        approveType === 'Approve' ? approveFund
          : approveType === 'Request Edit' ? requestEdit
            : approveType === 'Reject' ? rejectFund : () => { console.log('No type selected!') }
      }
      primaryBtnText={approveType}
      primaryErrorBtn={approveType === 'Reject'}
    >
      <TextField
        className={styles.fields}
        id="message"
        name="message"
        label={'Message'}
        value={fundDetails.message}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        autoFocus
        error={error ? true : false}
        helperText={error}
      />
    </CustomDialog>
  )
}

export default ApproveModal
