import { useState } from 'react';
import TextField from '@mui/material/TextField';
import CustomDialog from '../customDialog/CustomDialog';

import styles from './donateModal.module.css';

const ApproveModal = ({ open, setOpen, fundId, fundName }) => {

  const [fundDetails, setFundDetails] = useState({
    fundId: fundId,
    message: '',
  });

  const handleChange = (e) => {
    setFundDetails({
      ...fundDetails,
      amount: e.target.value
    })
  }

  // Request call to approve fund
  const approveFunc = () => {

    // TODO: Check for login status

    alert(`"${fundName}" is approved`)
    setOpen(false)
  }

  return (
    <CustomDialog
      heading={"Are you sure?"}
      body={`Fund: ${fundName}`}
      open={open}
      setOpen={setOpen}
      customFunction={approveFunc}
      btnText={"Approve"}
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
      />
    </CustomDialog>
  )
}

export default ApproveModal
